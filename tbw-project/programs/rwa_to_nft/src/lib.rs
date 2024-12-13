use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZzYdYoKHE8xG73bRCPk");

#[program]
pub mod rwa_to_nft {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Program initialized!");
        Ok(())
    }

    pub fn mint_ownership_nft(ctx: Context<MintNFT>, metadata: String) -> Result<()> {
        msg!("Minting Ownership NFT with metadata: {}", metadata);
        Ok(())
    }

    pub fn mint_control_nft(ctx: Context<MintNFT>, metadata: String) -> Result<()> {
        msg!("Minting Control NFT with metadata: {}", metadata);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct MintNFT<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
}

