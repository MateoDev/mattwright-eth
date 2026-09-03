---
title: "The Intelligence We Own"
description: "Why sovereign AI is the defining infrastructure battle of our generation — and why the answer isn't choosing a better patron, but holding the weights, inference, and data yourself."
date: "2026-04-01"
category: "Thoughts"
readTime: "12 min"
---

We are living through the most consequential infrastructure shift since the internet itself. Artificial intelligence is no longer a feature — it is becoming the operating system of the digital economy. Within a year or two, AI agents will outnumber humans on Earth, forming the largest unbanked population the world has ever seen. They will trade, govern, create, and coordinate at speeds and scales that make today's digital economy look like dial-up.

And nearly all of that intelligence runs through a handful of corporate chokepoints.

The models, the inference, the data pipelines, the rules about what an AI can and cannot say — controlled by a few companies, in a few countries. If AI is the new infrastructure layer, then we have to ask the question that defined the early internet: who controls it?

This is not an abstract philosophical debate. It is the defining infrastructure battle of our generation. And the answer — sovereign AI — is not just possible. It is arriving.

## What we mean by sovereign AI

When most people hear "sovereign AI," they think of nation-states building their own frontier models: Saudi compute clusters, France's Mistral, India's BharatGPT. That's part of the picture. It isn't the part that matters most.

The sovereignty that matters is at the level of the individual, the developer, the community, and the organization. It means owning your AI stack the way you own your private keys — the models you run, the data you train on, the inference you execute, the agent logic you deploy. No single entity should have a kill switch on your intelligence.

Vitalik Buterin has framed this through d/acc: defensive, decentralized acceleration. The argument is not anti-technology. It is pro-technology and anti-concentration. Decentralized systems act as a counterweight to the centralizing pull of powerful ones, so that the power of intelligence is distributed rather than hoarded. When AI becomes the interface through which people access information, execute transactions, and make decisions, whoever controls the inference layer controls the outcome.

Sovereign AI rests on four pillars: open models, local and decentralized inference, permissionless deployment, and data ownership. Remove any one and sovereignty collapses back into dependence.

## The case

Privacy is architectural, not contractual. Every prompt you send to a centralized API is a data point you have surrendered. Your agent's logic, your users' queries, your proprietary workflows — all of it flows through someone else's infrastructure, subject to their logging policies, their compliance obligations, and their business incentives. When you run a model on your own node, or across a network of staked nodes, your data never leaves your perimeter. That is not a better privacy policy. It is the absence of a party who could break one.

Censorship resistance follows from the same property. As AI becomes the layer through which people search, create, transact, and reason, whoever controls inference controls what can be asked, what is answered, and what agents are permitted to do. We have already watched centralized providers quietly adjust model behavior under political, commercial, and regulatory pressure. In a world of autonomous agents managing portfolios, governance votes, and supply chains, that kind of editorial control at the inference layer becomes untenable — not because any single decision is wrong, but because the capability to make it unilaterally shouldn't sit in one place.

And the economics have inverted. Two years ago, arguing for open models meant accepting a capability trade-off. That argument is over, and it ended faster than almost anyone predicted.

## The open frontier moved, and it did not move where people expected

By May of this year, Chinese open-weight models accounted for roughly 61% of all tokens routed through OpenRouter — the largest neutral gateway in the market. Four of the five most-used models on it originate in China. Qwen has passed Llama as the most-downloaded open model on Hugging Face and now anchors around 40% of all new derivative models created there, more than Google's and Meta's base families combined. DeepSeek's latest runs at roughly a twelfth the price of frontier closed models at comparable performance on most tasks. Meta's Llama, the model that defined the open-weight argument in the West, has effectively fallen out of the rankings.

This is worth sitting with, because it complicates the story rather than confirming it.

The open frontier is real, it is cheap, and it is winning on adoption. That is the strongest possible evidence that intelligence is commoditizing and that no one lab holds the ceiling. It is also, right now, substantially Chinese — which means "sovereignty" cannot honestly be reduced to independence from a few American companies. A developer running Qwen on rented GPUs has swapped one set of dependencies for another set with different politics attached.

The response isn't to pretend otherwise. It's to be precise about what sovereignty actually requires: not choosing a better patron, but holding the weights, the inference, and the data yourself, so that whichever lab produced the model — and whatever happens to that lab, in whatever jurisdiction — the thing keeps running on hardware you control. Open weights make that possible. Where they came from is a supply question. Whether you can operate without asking permission is the sovereignty question, and those are not the same question.

## Why now

The agent economy needs it structurally. I've written before about the billion agent economy — a world where agents are not tools you use but participants in the economy alongside you. Those agents need identities, wallets, reputation, and financial rails. Much of that is being built right now, at speed, from both the crypto and payments sides.

But you cannot build a decentralized agent economy on centralized inference. The contradiction is fatal. If every agent's reasoning passes through three corporate APIs, then the decentralized economy is centralized at its most critical layer — thought itself. Wallets and settlement rails don't fix that. They make it more consequential.

The web3 infrastructure finally exists. For years the AI-crypto intersection was mostly speculative. That has changed, and the pieces that matter are the ones that answer specific questions rather than the ones that appear on ecosystem maps. EigenLayer provides cryptoeconomic security for node validation, which is how a decentralized inference network establishes that its operators have something at stake. ENS gives agents human-readable, self-owned identities. Lagrange's zero-knowledge proofs make on-chain verification of AI outputs possible in principle.

And regulation is doing what regulation does. The EU's AI Omnibus entered into force on 27 July 2026, deferring the high-risk system obligations to December 2027 and August 2028, keeping the Article 50 transparency requirements on their original August 2026 date, and expanding the AI Office's supervision of general-purpose model providers.

Read the deferral carefully, because it's the most instructive thing in it. The high-risk deadlines moved because businesses said they needed more time to implement the standards and conformity procedures. That is the incumbent-capture dynamic operating in plain sight — not as conspiracy, but as the ordinary physics of compliance. Firms with regulatory affairs departments shape the timeline; firms without them inherit it. Sovereign infrastructure is a hedge against that, not by operating outside the law, but by ensuring the ability to run intelligence is not gated by someone else's compliance function.

## What the honest objections are

I'd rather state these than have them stated for me, because most sovereign-AI writing skips them and that's why most sovereign-AI writing doesn't persuade anyone who isn't already convinced.

Decentralized inference is not free of trade-offs. For latency-sensitive workloads at the very frontier of capability, a distributed node network does not match a hyperscaler with dedicated interconnects and unified scheduling. It doesn't have to for the argument to hold, but pretending the gap doesn't exist loses the room.

Convenience beats sovereignty, historically and reliably. That is the actual lesson of the early internet, and it's the one this argument usually gets backwards. Open protocols won the transport layer, and the application layer was captured anyway — not because people chose closed platforms over open ones on principle, but because the closed ones were easier. Any sovereignty that requires the user to operate infrastructure will lose to a product that requires nothing. The work is making the sovereign path the default path, not the virtuous one.

Verification is genuinely unsolved at scale. Proving that a node ran the model it claimed, on the input it claimed, cheaply enough to do it for every inference, is early research rather than shipped infrastructure. Zero-knowledge proofs for LLM inference are advancing quickly and are not yet a general answer. Anyone telling you this is finished is selling something.

And "open weights" is not the same as open. You can download most of these models, run them, and fine-tune them. You usually cannot inspect the training data, the filtering decisions, or the alignment process that gave them their values. That's a meaningful limit on what auditability actually delivers today, and it applies to every model named in this essay.

None of these kill the thesis. They set the bar for it. Sovereign AI doesn't need to win every workload — it needs to be available, good enough where the trade is worth making, and structurally impossible to switch off. That last property is the one no centralized provider can offer at any price, and it's the only one that matters when the question stops being what your AI costs and becomes whether you still have it.

## From infrastructure to economy

The endgame isn't sovereign infrastructure. It's a sovereign economy.

Within five years, agents shift from task-based tools to autonomous systems that manage workflows, deploy capital, participate in governance, and form interconnected ecosystems. They will need financial rails that support trustless transactions and programmable incentives. They will need governance mechanisms that let them coordinate without human bottlenecks. And they will need verification — decentralized validation that an agent used the data, model, compute, and runtime it was supposed to.

That last requirement is the one the industry consistently underestimates. Identity and settlement are being solved by well-capitalized companies moving fast. Proof is not, and proof is what makes the rest of it trustworthy. An agent economy where every participant can transact but nobody can verify what was actually done is not an economy. It's a very fast way to lose money.

## The intelligence we choose

The early internet was defined by a fight between open protocols and closed platforms. Open protocols won the first round — TCP/IP, HTTP, SMTP became the shared rails of the digital world. Then the application layer was captured by a handful of companies, and we spent two decades trying to claw back what we'd given away.

AI is the second chance. The models are open. The frameworks are open. The infrastructure can be decentralized. The economic layer exists on-chain. For the first time we have every piece required to build an intelligence layer that is permissionless, composable, and owned by the people who use it.

But that window closes by default rather than by decision. Nobody will announce that it shut. Every day the default AI infrastructure stays centralized, the agent economy's foundations calcify a little further around chokepoints that were never voted on — and the moment intelligence is genuinely load-bearing for the economy is the moment it becomes too expensive to move.

We are not going to get a third round of this.