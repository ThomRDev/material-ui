#

````sh
  npm i eslint -D
  npx eslint --init
````

## Circle CI y Vercel

````sh
  # https://vercel.com/docs/cli/global-options
  # crear una cuenta en vercel, un team dentro
  # crear un token y asignalo en el team
  npm i -g vercel
  # <team> copiar el team que este en el url
  vercel project add <name-project> --scope <team> --token=<token>
  vercel project add test --scope <team> --token=<token>
  # VARIABLES DE ENTORNO NECESARIAS 
  # VERCEL_PROJECT_NAME
  # VERCEL_SCOPE
  # VERCEL_TOKEN
# crear una cuenta en circle ci
````

````yml
# explicacion de circleci
# crear un proyecto en circle ci, conectarlo con github, seleccionar el proyecto
# y que circle ci cree la rama con la opcion faster
version: 2.1

jobs:
  install-dependencies:
    working_directory: ~/repo
    docker:
      - image: cimg/node:16.13.2
    steps:
      - checkout
      - run:
          name: Update or install NPM
          # esto no es necesario pero lo actualiza si no esta actualizado
          command: 'sudo npm install -g npm'
      # cache
      - restore_cache:
          key: app-{{ checksum "package-lock.json" }}
      - run:
          name: Install Dependencies
          command: npm install
        # persistira la informacion generada en este job para que otros jobs puedan usarla
      - persist_to_workspace:
          root: .
          paths:
            - .
  vercel-deploy:
    build:
    working_directory: ~/repo
    docker:
      - image: cimg/node:16.13.2
    steps:
      - checkout
      - run:
          name: Install CLI Vercel
          command: 'sudo npm install -g vercel'
        # obtengo la informacion que persisti
      - attach_workspace:
          at: .
        # deploy
      - run:
          name: Vercel Prod Deploy
          command: vercel --prod --build-env VITE_RICK_AND_MORTY_URL=https://rickandmortyapi.com/api/ --name $VERCEL_PROJECT_NAME --scope $VERCER_SCOPE --token=$VERCEL_TOKEN  # yes que no lance ninguna pregunta, todo yes
# estos son los pipelines
workflows:
  version: 2
  deploy-reactapp:
    jobs:
      # de los jobs anteriores
      - install-dependencies:
          filters:
            branches:
              only:
                - develop
      - vercel-deploy:
          # que el vercel-deploy si o si necesita el job install-dependencies
          requires:
            - install-dependencies
          filters:
            branches:
              only:
                - develop
````
