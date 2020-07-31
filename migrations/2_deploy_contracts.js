const MyStringStore = artifacts.require("MyStringStore");

export default function (deployer) {
  deployer.deploy(MyStringStore);
}
