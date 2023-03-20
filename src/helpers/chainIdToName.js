const chains = {
    [1]: "mainnet",
    [5]: "goerli",
    [100]: "xdai",
};
export const chainIdToName = (chainId) => {
    const name = typeof chainId === "number" ? chains[chainId] : chainId;
    if (!name || !Object.values(chains).includes(name))
        throw new Error(`Network ${chainId} not supported`);
    return name;
};
//# sourceMappingURL=chainIdToName.js.map