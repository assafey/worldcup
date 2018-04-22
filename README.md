# worldcup

World Cup Bet System on Blockchain (Hyperledger)

References:
----

### How to create an application on blockchain using Hyperledger:
https://medium.freecodecamp.org/ultimate-end-to-end-tutorial-to-create-an-application-on-blockchain-using-hyperledger-3a83a80cbc71

### Hyperledger docs:
- https://hyperledger.github.io/composer/latest/introduction/introduction.html
- NodeJS: https://hyperledger.github.io/composer/latest/applications/node
- Model: https://hyperledger.github.io/composer/latest/reference/cto_language

Reset network:
----
- cd ~/fabric-tools
- ./stopFabric.sh
- ./teardownFabric.sh
- ./startFabric.sh
- ./createPeerAdminCard.sh

Creating network:
----

- [if something changed bump package.json version]
- npm run publish
- npm run start:network -- --networkVersion VERSION
- [development] npm run start:server

TODO:
----
- Client [React+Webpack]
- Server [Express+ComposerClient]