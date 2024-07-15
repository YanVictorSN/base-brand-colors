import { Button, Frog, parseEther, TextInput } from "frog";
import { devtools } from "frog/dev";
import { serveStatic } from "frog/serve-static";
import { neynar } from "frog/middlewares";
import { handle } from "frog/vercel";
import { Box, Column, Image, Text, vars } from "../lib/ui.js";
import { publicClient } from "../lib/config.js";
import { baseSepolia } from "viem/chains";
import { decodeEventLog, type Address } from "viem";
import { JSX } from "frog/jsx/jsx-runtime";
import { JSXNode, Child } from "hono/jsx";
import { HtmlEscapedString } from "hono/utils/html";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCompatibleWithSpotMints",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "SequentialMintExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "SequentialUpToTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "SpotMintTokenIdTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "traitType",
        type: "string",
      },
    ],
    name: "AttributeRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_token",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMintPrice",
        type: "uint256",
      },
    ],
    name: "MintPriceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "NameChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "keys",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "values",
        type: "string[]",
      },
    ],
    name: "TokenAttributesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "TokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "colors",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
    ],
    name: "TokensMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "_changeMintPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_disableNameOverwrite",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_disablePriceChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "_overwriteColorName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "newNames",
        type: "string[]",
      },
    ],
    name: "_overwriteColorNamesBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "traitType",
        type: "string",
      },
    ],
    name: "_removeTokenTrait",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "_revokeTokenTraitModificationPrivileges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_toggleMintingEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "traitTypes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "values",
        type: "string[]",
      },
    ],
    name: "_updateTokenAttributes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "string[][]",
        name: "traitTypes",
        type: "string[][]",
      },
      {
        internalType: "string[][]",
        name: "values",
        type: "string[][]",
      },
    ],
    name: "_updateTokenAttributesBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "traitType",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isUserModifiable",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isEnabledForAllTokens",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "eligibleTokens",
        type: "uint256[]",
      },
    ],
    name: "_updateUserModifiableAttribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "traitType",
        type: "string",
      },
    ],
    name: "getAttributeData",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isUserModifiable",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isEnabledForAllTokens",
            type: "bool",
          },
        ],
        internalType: "struct BASECOLORS.AttributeData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getAttributesAsJson",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
    ],
    name: "getColorData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUsed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "nameChangeCount",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "modifiableTraits",
            type: "string[]",
          },
        ],
        internalType: "struct BASECOLORS.ColorData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "getMintedColorsRange",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isAdminNameOverwriteEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isAdminPriceChangeEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMintingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "isNameTaken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "isUserModifiableAttribute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "hexString",
        type: "string",
      },
    ],
    name: "isValidHex",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "color",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "colors",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newName",
        type: "string",
      },
    ],
    name: "setColorName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "newNames",
        type: "string[]",
      },
    ],
    name: "setColorNamesBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToColor",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "traitType",
        type: "string",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "updateTokenAttribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const app = new Frog({
  assetsPath: "/",
  basePath: "/api/frame",
  ui: { vars },
  browserLocation: "https://base-brands-colors.vercel.app/api/frame",
  imageAspectRatio: "1:1",
  headers: {
    "cache-control":
      "no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0",
  },
  imageOptions: {
    height: 1024,
    width: 1024,
  },
  title: "Base Brand Colors",
}).use(
  neynar({
    apiKey: process.env.NEYNAR_API_KEY || "NEYNAR_API_DOCS",
    features: ["interactor", "cast"],
  })
);

app.frame("/", async (c) => {
  const { buttonValue, inputText, status } = c;
  const fruit = inputText || buttonValue;

  return c.res({
    image: (
      <Box
        grow
        display="flex"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        gap="10"
        padding="20"
      >
        <Box
          grow
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="22"
        >
          <img
            src="https://base-brands-colors.vercel.app/base_colors_logo.jpg"
            style={{ width: "1000px", height: "115px" }}
            alt=""
          />
          <Text size="32">Brand Colors Frame</Text>
          <Text size="24">Search and mint famous brand colors</Text>
        </Box>
        <Box
          width="100%"
          height="20"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="16">by @yanvictorsn.eth</Text>
        </Box>
      </Box>
    ),
    intents: [
      <TextInput placeholder="Search for brand colors." />,
      <Button action="/brand-colors">Search Brand</Button>,
    ],
  });
});

const getBrandId = async (brand: string | undefined) => {
  try {
    const response = await fetch(
      `https://api.brandfetch.io/v2/search/${brand}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const brandData = await response.json();
    return brandData[0].domain;
  } catch (error) {
    throw new Error("The brand is not available");
  }
};

const getBrandData = async (brandDomain: string) => {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer ",
      },
    };
    const response = await fetch(
      `https://api.brandfetch.io/v2/brands/${brandDomain}`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const brandDataDomain = await response.json();
    return brandDataDomain;
  } catch (error) {
    return error;
  }
};

let brandData: {
  logos: any;
  colors: any;
  name:
    | string
    | number
    | boolean
    | Promise<string>
    | HtmlEscapedString
    | Promise<HtmlEscapedString>
    | JSX.Element[]
    | JSXNode
    | Child[]
    | null
    | undefined;
};

app.frame("/brand-colors", async (c) => {
  const { inputText } = c;
  const { buttonValue } = c;
  let brand;
  if (inputText != "") {
    brand = inputText;
  } else {
    brand = buttonValue;
  }

  try {
    const brandDomain = await getBrandId(brand);

    if (brandDomain === undefined) {
      throw new Error("The brand is not available");
    }

    brandData = await getBrandData(brandDomain);

    return c.res({
      image: `/brand-colors-img`,
      action: "/finish",
      headers: {
        "cache-control":
          "no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0",
      },
      intents: [
        // <TextInput placeholder="Insert hex code (i.e. #0000FF)" />,
        // <Button.Transaction target="/mint">
        //   Mint selected color
        // </Button.Transaction>,
        <Button.Transaction target="/mint-batch">
          Mint all available 🎉
        </Button.Transaction>,
        <Button action="/">Go back ⬅️</Button>,
      ],
    });
  } catch (error) {
    return c.res({
      headers: {
        "cache-control":
          "no-store, no-cache, must-revalidate, proxy-revalidate max-age=0, s-maxage=0",
      },
      image: "/brand-colors-not-available",
      intents: [
        <TextInput placeholder="Search for brand colors." />,
        <Button action="/brand-colors">Search Brand</Button>,
      ],
    });
  }
});

app.image("/brand-colors-not-available", async (c) => {
  return c.res({
    image: (
      <Box
        display="flex"
        grow
        width="100%"
        height="100%"
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        gap="40"
        padding="20"
        paddingTop="60"
      >
        <Box flexDirection="row" gap="10" backgroundColor="blue">
          <img
            src="https://base-brands-colors.vercel.app/base_colors_logo.jpg"
            style={{ width: "800px", height: "90px" }}
            alt=""
          />
        </Box>
        <Box
          display="flex"
          grow
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="32">This brand is not available.</Text>
          <Text size="32">Please, try another.</Text>
        </Box>
        <Box
          width="100%"
          height="20"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="16">by @yanvictorsn.eth</Text>
        </Box>
      </Box>
    ),
  });
});

const brandColorsAvailable: { colorHex: any; colorIsUsed: boolean }[] = [];

app.image("/brand-colors-img", async (c) => {
  brandColorsAvailable.length = 0;
  const brandDataLogos = brandData.logos;

  const brandDataColors = brandData.colors;

  const brandIcon = [];

  try {
    for (let index = 0; index < brandDataLogos.length; index++) {
      const element = brandDataLogos[index];

      if (element.type === "icon") {
        const formats = element.formats;
        for (let index = 0; index < formats.length; index++) {
          const formatsData = formats[index];
          console.log(formatsData);
          brandIcon.push({
            imgUrl: formatsData.src,
            width: formatsData.width,
            height: formatsData.height,
          });
        }
      }
    }

    if (brandIcon[0].imgUrl === undefined) {
      throw new Error("The brand is not available");
    }

    async function isColorTaken(color: unknown) {
      try {
        const data = await publicClient.readContract({
          address: "0x872F8b8Ab4bC793285f00f5D4CDB1DB09691f9fD",
          abi: abi,
          functionName: "getColorData",
          args: [color],
        });
        return data.isUsed;
      } catch (error) {
        console.error("Error reading contract:", error.message);
        return false; // Return false if there's an error
      }
    }

    if (brandColorsAvailable.length <= 0) {
      for (let index = 0; index < brandDataColors.length; index++) {
        const element = brandDataColors[index];

        const colorTaken = await isColorTaken(element.hex);
        if (colorTaken) {
          brandColorsAvailable.push({
            colorHex: element.hex,
            colorIsUsed: true,
          });
        } else {
          brandColorsAvailable.push({
            colorHex: element.hex,
            colorIsUsed: false,
          });
        }
      }
    }

    console.log(brandColorsAvailable);
    return c.res({
      image: (
        <Box
          display="flex"
          grow
          width="100%"
          height="100%"
          backgroundColor="white"
          justifyContent="space-between"
          alignItems="center"
          gap="40"
          padding="20"
          paddingTop="60"
        >
          <Box flexDirection="row" gap="10" backgroundColor="blue">
            <img
              src="https://base-brands-colors.vercel.app/base_colors_logo.jpg"
              style={{ width: "800px", height: "90px" }}
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10"
          >
            <Image width="96" height="96" src={brandIcon[0].imgUrl}></Image>
            <Text size="24">{brandData?.name}</Text>
          </Box>
          <Box
            gap="20"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <Text size="20">Brand Colors:</Text>
            <Box
              grow
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="center"
              alignContent="center"
              gap="24"
              flexWrap="wrap"
            >
              {brandColorsAvailable?.map((element: any, index: any) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#f0f0f0",
                    gap: "4px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "120px",
                      height: "120px",
                      backgroundColor: element.colorHex,
                      position: "relative",
                      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {element.colorIsUsed && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "red",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="50%"
                          height="50%"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div>{element.colorHex.toUpperCase()}</div>
                </div>
              ))}
            </Box>
          </Box>
          <Box
            width="100%"
            height="20"
            justifyContent="center"
            alignItems="center"
          >
            <Text size="16">by @yanvictorsn.eth</Text>
          </Box>
        </Box>
      ),
    });
  } catch (error) {
    return c.res({
      image: (
        <Box
          display="flex"
          grow
          width="100%"
          height="100%"
          backgroundColor="white"
          justifyContent="space-between"
          alignItems="center"
          gap="40"
          padding="20"
          paddingTop="60"
        >
          <Box flexDirection="row" gap="10" backgroundColor="blue">
            <img
              src="https://base-brands-colors.vercel.app/base_colors_logo.jpg"
              style={{ width: "800px", height: "90px" }}
              alt=""
            />
          </Box>
          <Box
            display="flex"
            grow
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text size="32">This brand is not available.</Text>
            <Text size="32">Please, try another.</Text>
          </Box>
          <Box
            width="100%"
            height="20"
            justifyContent="center"
            alignItems="center"
          >
            <Text size="16">by @yanvictorsn.eth</Text>
          </Box>
        </Box>
      ),
    });
  }
});

app.frame("/finish", async (c) => {
  const { transactionId } = c;
  const transaction = await publicClient.waitForTransactionReceipt({
    hash: `${transactionId}`,
  });
  const address = transaction.from;

  return c.res({
    image: `/finish-image/${transactionId}`,
    intents: [
      <TextInput placeholder="Search for brand colors." />,
      <Button action="/brand-colors">Search Brand</Button>,
      <Button.Link
        href={`https://warpcast.com/~/compose?text=%2Fbasecolors%0A%0A%5BNote%3A%20a%20square%20image%20of%20the%20Base%20Colors%20logo%20will%20automatically%20appear%20in%20this%20cast.%20Please%20delete%20this%20note%20before%20casting%20and%20click%20the%20channel%20to%20cast%20in%20%2Fbasecolors.%5D&embeds[]=https://i.ibb.co/PtwcHP7/base-spectrum-square.jpg&embeds[]=https://warpcast.com/jake/0xb4da666b`}
      >
        Share
      </Button.Link>,
      <Button.Link href={`https://basecolors.com?addressFromFrame=${address}`}>
        Name Colors
      </Button.Link>,
    ],
  });
});

function hexToAscii(hex) {
  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    const charCode = parseInt(hex.substr(i, 2), 16);
    if (charCode) {
      str += String.fromCharCode(charCode);
    }
  }
  return str;
}

function decodeHexData(hexData) {
  if (hexData.startsWith("0x")) {
    hexData = hexData.slice(2);
  }

  const segments = [];
  for (let i = 0; i < hexData.length; i += 64) {
    segments.push(hexData.slice(i, i + 64));
  }

  const length1 = parseInt(segments[2], 16);

  const data1Hex = segments[3].slice(0, length1 * 2);

  const data1 = hexToAscii(data1Hex);

  return {
    data1,
  };
}

app.image("/finish-image/:id", async (c) => {
  const { id } = c.req.param();
  const hexColor: string[] = [];
  const transaction = await publicClient.waitForTransactionReceipt({
    hash: `${id}`,
  });
  const totalLogs = transaction.logs.length;
  const mintLogTopis = transaction.logs[totalLogs - 1].topics;
  console.log(totalLogs, mintLogTopis, "Total");
  const topics = decodeEventLog({
    abi: abi,
    topics: mintLogTopis,
    data: transaction.logs[totalLogs - 1].data,
  });
  const hexs = topics.args.colors;

  if (hexs === undefined) {
    const decodedHexData = decodeHexData(transaction.logs[1].data);
    console.log(decodedHexData);
    hexColor.push(decodedHexData.data1);
  } else {
    hexs.map((element: string) => hexColor.push(element));
  }

  return c.res({
    image: (
      <Box
        display="flex"
        grow
        width="100%"
        height="100%"
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        gap="40"
        padding="20"
        paddingTop="60"
      >
        <Box flexDirection="row" gap="10">
          <img
            src="https://base-brands-colors.vercel.app/base_colors_logo.jpg"
            style={{ width: "800px", height: "90px" }}
            alt=""
          />
        </Box>
        <Box
          gap="20"
          grow
          justifyContent="center"
          alignContent="center"
          alignItems="center"
        >
          <Text size="20">Colors Minted:</Text>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            gap="10"
          >
            {hexColor?.map((element: any, index: any) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "120px",
                  height: "120px",
                  backgroundColor: "#f0f0f0",
                  gap: "4px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "120px",
                    height: "120px",
                    backgroundColor: element,
                    position: "relative",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
                  }}
                ></div>
                {element.toUpperCase()}
              </div>
            ))}
          </Box>
        </Box>
        <Box
          width="100%"
          height="20"
          justifyContent="center"
          alignItems="center"
        >
          <Text size="16">by @yanvictorsn.eth</Text>
        </Box>
      </Box>
    ),
  });
});

app.transaction("/mint", (c) => {
  const { inputText } = c;

  const address = c.address as Address;

  return c.contract({
    abi,
    chainId: `eip155:${baseSepolia.id}`,
    functionName: "mint",
    args: [inputText, inputText.substring(1), address],
    to: "0x872F8b8Ab4bC793285f00f5D4CDB1DB09691f9fD",
    value: BigInt(1000000000000000n),
  });
});

app.transaction("/mint-batch", async (c) => {
  const account = c.address as Address;
  const availableColors = brandColorsAvailable
    .filter((color) => !color.colorIsUsed)
    .map((color) => color.colorHex);
  const availableNameColors = availableColors.map((hex) => hex.substring(1));
  const value = BigInt(1000000000000000n) * BigInt(availableColors.length);

  return c.contract({
    abi,
    chainId: `eip155:${baseSepolia.id}`,
    functionName: "mintBatch",
    args: [
      availableColors,
      availableNameColors,
      availableColors.length,
      account,
    ],
    to: "0x872F8b8Ab4bC793285f00f5D4CDB1DB09691f9fD",
    value: value,
  });
});

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== "undefined";
const isProduction = isEdgeFunction || import.meta.env?.MODE !== "development";
devtools(app, isProduction ? { assetsPath: "/.frog" } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
