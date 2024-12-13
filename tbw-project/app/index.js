const anchor = require("@project-serum/anchor");
const { Connection, PublicKey, clusterApiUrl } = require("@solana/web3.js");

// Configure the client to use the local cluster
const provider = anchor.AnchorProvider.local();
anchor.setProvider(provider);

// Load the program (replace with your program ID)
const programId = new PublicKey("Fg6PaFpoGXkYsidMpWTK6W2BeZzYdYoKHE8xG73bRCPk"); // Your deployed program ID
const program = new anchor.Program(require("./idl.json"), programId, provider);

// DOM Elements
const mintOwnershipButton = document.getElementById("mint-ownership");
const mintControlButton = document.getElementById("mint-control");
const resultDiv = document.getElementById("result");

// Helper function to log results
function logResult(message) {
  const newResult = document.createElement("p");
  newResult.textContent = message;
  resultDiv.appendChild(newResult);
}

// Initialize the program
async function initializeProgram() {
  try {
    const tx = await program.methods.initialize().rpc();
    logResult(`Program initialized! Transaction: ${tx}`);
  } catch (error) {
    logResult(`Error initializing program: ${error}`);
  }
}

// Mint Ownership NFT
async function mintOwnershipNft(metadata) {
  try {
    const tx = await program.methods.mintOwnershipNft(metadata).rpc();
    logResult(`Minted Ownership NFT with metadata: ${metadata}. Transaction: ${tx}`);
  } catch (error) {
    logResult(`Error minting Ownership NFT: ${error}`);
  }
}

// Mint Control NFT
async function mintControlNft(metadata) {
  try {
    const tx = await program.methods.mintControlNft(metadata).rpc();
    logResult(`Minted Control NFT with metadata: ${metadata}. Transaction: ${tx}`);
  } catch (error) {
    logResult(`Error minting Control NFT: ${error}`);
  }
}

// Event Listeners for Buttons
mintOwnershipButton.addEventListener("click", () => {
  const metadata = prompt("Enter metadata for Ownership NFT:");
  if (metadata) mintOwnershipNft(metadata);
});

mintControlButton.addEventListener("click", () => {
  const metadata = prompt("Enter metadata for Control NFT:");
  if (metadata) mintControlNft(metadata);
});

// Initialize the program when the page loads
initializeProgram();

