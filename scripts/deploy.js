const main = async () => {
    const conduitController = await hre.ethers.getContractFactory("ConduitController");
    const conduit = await conduitController.deploy();
    await conduit.deployed();
    console.log("Conduit contract deployed to:", conduit.address);

    const seaportController = await hre.ethers.getContractFactory("Seaport")
    const seaport = await seaportController.deploy(conduit.address);
    await seaport.deployed();
    console.log("Seaport contract deployed to:", seaport.address)

  };
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  runMain();