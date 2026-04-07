---
title: "New to Quorum? Start Here."
description: "What is Quorum, why it's built on Ethereum, and how to get started as a developer on JPMorgan's enterprise blockchain."
date: "2020-04-24"
category: "TECHNICAL"
readTime: "8 min"
forum_url: "https://medium.com/@mateo_ventures/new-to-quorum-start-here-81d87d96bc5f"
forum_name: "Medium"
---

## What is Quorum?

Quorum is a private/permissioned blockchain platform built for enterprise. It's a fork of the Go Ethereum client (geth) — the official GoLang implementation of the Ethereum protocol — designed to process private transactions with a permissioned group of known participants. Developed and maintained by J.P. Morgan since 2015, Quorum is enterprise-ready and available straight from GitHub.

## Why Ethereum?

Ethereum isn't just a cryptocurrency — it's an open source platform for building decentralized applications (DApps) and a general platform for smart contract development. It provides a decentralized virtual machine (the EVM) which can execute scripts across a distributed network of nodes, with Turing-complete instruction sets.

Ethereum also has the largest blockchain ecosystem with 4x more developers than any other protocol. Tons of people are building on top of it, which means tooling, libraries, and momentum.

## Why Quorum Specifically?

During the early development of Quorum, it became clear that the internet of value would bring significant changes to enterprises. Ethereum's public network — where every transaction and participant is publicly visible — wasn't suitable for enterprise use cases that require:

- **Privacy** — sensitive transaction data should not be publicly visible
- **Speed and throughput** — enterprise volumes require higher performance than public mainnet
- **Permissioned access** — only known, trusted participants

Quorum addressed these challenges by adding:

- A privacy manager to support private transactions (via Tessera)
- Private and public EVM state — same smart contracts as public Ethereum
- A permissioned network (consortium model)
- Pluggable consensus mechanisms

Public Ethereum tools work seamlessly with Quorum — Truffle Suite, Remix IDE, MetaMask, web3j all play nicely.

## Architecture

Quorum consists of three core components:

1. **Quorum Node** — a modified Geth client with privacy and permissioning extensions
2. **Transaction Manager (Tessera)** — handles private transaction distribution and encryption
3. **Encryption Enclave** — manages cryptographic keys for private transactions

## Common Use Cases

Quorum is most useful when you have:

- Geographically distributed entities in a network
- Limited trust between participants
- No need or desire for central control
- A requirement for transaction privacy

This typically maps to:

- **Asset and supply chain systems**
- **Multi-party financial settlement**
- **Real-time auditing and compliance**
- **Healthcare data management**
- **Cross-organizational decision making**

## Getting Started

- [Getting Started with Quorum](https://docs.goquorum.consensys.net/)
- [GitHub](https://github.com/ConsenSys/quorum)
- [Developer Docs](https://docs.goquorum.consensys.net/)
- Slack: `#quorum` on the ConsenSys Slack

The best first step: clone the repo, spin up a local network with Quorum Wizard (`npx quorum-wizard`), and deploy a simple private smart contract. The tooling is solid and the Ethereum muscle memory transfers directly.
