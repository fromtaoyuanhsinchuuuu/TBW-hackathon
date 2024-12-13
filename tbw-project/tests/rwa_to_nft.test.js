const anchor = require("@project-serum/anchor");

describe("rwa_to_nft", () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);

  const program = anchor.workspace.RwaToNft;

  it("Initializes the program", async () => {
    const tx = await program.methods.initialize().rpc();
    console.log("Transaction Signature:", tx);
  });

  it("Mints Ownership NFT", async () => {
    const tx = await program.methods
      .mintOwnershipNft("Ownership Metadata Example")
      .rpc();
    console.log("Minted Ownership NFT:", tx);
  });

  it("Mints Control NFT", async () => {
    const tx = await program.methods
      .mintControlNft("Control Metadata Example")
      .rpc();
    console.log("Minted Control NFT:", tx);
  });
});

