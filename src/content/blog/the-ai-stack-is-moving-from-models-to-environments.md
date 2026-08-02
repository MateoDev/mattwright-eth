---
title: "The AI Stack Is Moving From Models to Environments"
description: "The next generation of AI winners will deploy, route, govern, and measure agentic work across many models, harnesses, and hardware surfaces — while preserving the right to leave."
date: "2026-08-02"
category: "Thoughts"
readTime: "18 min read"
draft: true
---

# The AI Stack Is Moving From Models to Environments

Models commoditize. Harnesses create switching power. Environments make the work measurable — and portable.

---

TL;DR — The next generation of AI winners will not only be the model labs. They will be the systems that deploy, route, govern, and measure agentic work across many models, many harnesses, and many hardware surfaces — and that preserve a company's right to leave any of them.

---

## I. The argument

For three years the industry organized itself around a single question: *which model gives the best answer?*

That question is becoming uninteresting. Not because model quality stopped mattering — it matters enormously — but because the answer changes every six weeks, costs less every quarter, and increasingly comes from weights anyone can download. A question whose answer is that unstable cannot be the foundation of an enterprise architecture.

The question that replaces it is harder and more durable: *which model, inside which harness, running in which environment, completes the work best — and how do we know?*

That reframing moves the center of gravity in the stack. Value stops accruing to the thing that produces tokens and starts accruing to the system that turns tokens into completed, governed, measurable work.

There is a second movement underneath it, less discussed and more consequential. As the model layer commoditizes, the incumbents that built their businesses on selling intelligence do not simply concede the margin. They retreat one layer up and fortify it — capturing governance, tools, and context, and binding customers with commercial structures that are much harder to exit than an API key. The defining enterprise question of the next two years will not be *which model*. It will be *can we still leave*.

This is a piece about why both shifts are happening now, what each layer of the stack looks like on the other side of them, and where the durable positions are.

---

## II. The stack, layer by layer

### 1. Models: capable, cheap, interchangeable

The direction is not in dispute. Frontier capability keeps climbing, price-per-token keeps collapsing, and the gap between the best closed model and the best open-weight model keeps narrowing.

The important structural change is not that open weights got good. It is that open weights got good *at the top of the range*. Moonshot's Kimi K3, released with full weights in late July 2026 at 2.8 trillion parameters, is the largest open-weight release in history and is claimed by its authors to trail only a small handful of closed frontier systems. Alibaba resumed open-weighting its leading Qwen line after briefly stepping back. Analysts now consistently put open models within a few points of proprietary APIs on standard enterprise benchmarks.

What follows from this is not "everyone self-hosts." That is the naïve version of the claim and it will not happen. What follows is subtler and more consequential: model selection stops being a strategic decision and becomes a routing decision.

Enterprises are already behaving this way. The emerging default is an à la carte posture — pay frontier prices for the workloads where quality and reliability justify the premium, and route high-volume, lower-stakes work to cheap open weights. One model for the legal review. A different one for the ten thousand classification calls behind it.

Once model choice lives in a config file rather than a board deck, the interesting engineering question moves one layer up.

### 2. Hardware: inference comes in-house

The second force is physical. Open weights are only strategically meaningful if there is somewhere to run them, and 2026 is the year that stopped being exotic.

The economics are now legible enough to appear in procurement conversations. Chamath Palihapitiya's 8090 has publicly reported that open-source models wrapped in their own tooling ran real enterprise workloads at a small fraction of frontier API cost — an order-of-magnitude claim, not a marginal one. The trade was latency and operational burden, not correctness.
For a large class of enterprise work, that is an acceptable trade.

Layered on top is compliance. For a meaningful set of buyers — defense, government, health, regulated finance, and increasingly anyone operating under European data rules — self-hosting is not a cost optimization. It is the only architecture with zero foreign-provider exposure. This is why Chinese open models show heavy adoption across Asia and Europe and essentially none inside US defense and government: the model is free, and the deployment is still forbidden. National security law in the model's home jurisdiction creates data-access obligations no commercial contract can fully override, and enterprise analysts have been blunt that this rules out certain vendors as a primary dependency regardless of benchmark performance.

The architecture people are converging on looks like a hub-and-spoke: frontier labs train foundation models once; enterprises fine-tune from open bases on their own clusters using proprietary data; and cheap, high-volume inference runs locally, close to the data, sometimes at the level of a single team or a single operator.

That is three deployment surfaces, not one. Whatever sits above them has to be portable across all three.

### 3. Inference economics: cost collapse buys loops

Cheap inference does not mean people spend less. It means they spend the same money on far more calls.

This is the mechanism most forecasts miss. When a single completion costs a fraction of what it did, the rational engineering response is not savings — it is loops. Retry on failure. Generate five candidates and rank them. Run an eval pass on every output. Have a second agent critique the first. Simulate the plan before executing it.

Every one of those patterns was economically absurd at 2024 prices and is standard practice now. Cost collapse converts directly into architectural complexity: more agents, more steps, more state, more concurrency, more surface area to secure and observe.

Which is the real reason this is an infrastructure story rather than a model story. Cheaper models do not simplify the system. They multiply it.

### 4. Context: RAG is plumbing, not a product

Retrieval-augmented generation had a good run as a category. It is ending — not because retrieval stopped mattering, but because it was never the whole thing.

Vector search is becoming one component inside a broader system that includes context assembly, persistent memory, tool access, evaluation, routing, and feedback. The vector database is a dependency in that system the way Redis is a dependency in a web application: essential, unglamorous, and not the product.

The correct unit of analysis at this layer is not the prompt and not the retrieval call. It is the work loop:

> context → tools → memory → model routing → output → artifact → approval → correction → cost → business outcome

Everything interesting happens across that loop, not at any single point in it. A system that measures prompt quality is measuring a step. A system that measures the loop is measuring work.

This distinction matters commercially. There is already a crowded field of retrieval tools and token dashboards. There is a much thinner field of systems that can attribute a completed business outcome to the full loop that produced it, including the retries, the human interventions, and the total cost of both.

### 5. Harnesses: the enterprise control layer

The harness thesis is now the most credible framing in enterprise AI, and it is essentially correct.

The argument, in its strongest form: models are commodities, context is proprietary. The harness — prompts, tools, memory, evals, permissions, business rules, workflow logic, data access — is where a company's actual advantage lives. Handing that context wholesale to a closed model provider is not a productivity strategy; it is an act of unilateral disclosure to a firm that may become a competitor. The risk is that companies bleed their edge into a model while believing they are building one.

This is right. It is also incomplete.
The harness answers *what the enterprise owns*. It does not answer any of the questions an enterprise asks immediately afterward:

- Where does the harness run?
- How is it deployed, versioned, and rolled back?
- How is it governed and permissioned?
- What did it actually produce?
- What did it cost, all-in?
- Who approved the output?
- Which artifacts changed?
- How do we compare one configuration against another?
- And if we want to move it somewhere else — can we?

Notice that basic harness orchestration is already commoditizing into standard cloud infrastructure. Managed runtimes, control planes, and telemetry are becoming things you buy rather than things you build. What does not commoditize is the answer to the questions above — because those answers are specific to the enterprise, auditable, and consequential.

Harnesses create switching power. They do not, by themselves, create accountability, and they do not guarantee you can exercise the switch.

### 6. Environments: the deployable unit of agentic work

An environment is where the whole thing resolves: runtime, hosting, harness, model, tools, memory, policies, data, artifacts, approvals, cost, evals, and logs — composed together, deployed as one thing, observed as one thing, and moved as one thing.

The reason this abstraction is winning is that the market is moving from *chat with a model* to *deploy an agentic work system*, and a work system needs somewhere to live. It needs provisioning and decommissioning parity — the ability to start, migrate, or shut down an entire operating context the way you issue or wipe a laptop. It needs an audit trail. It needs a boundary.

The failure mode this prevents is not hypothetical. In December 2025 an autonomous coding agent deleted and recreated a live production environment, taking a major cloud region offline for thirteen hours. That is not a model quality problem. No improvement in reasoning would have prevented it. It is an environment problem — scope, permission, and reversibility.

But composition and containment are not the strongest argument for this layer. Invariance is.

Consider what churns in a working AI stack over any twelve-month window. Retrieval approach. Tool definitions. Skills and sub-agents. Context management strategy. The model. The routing policy across models. The inference provider. The hosting surface. New infrastructure. New data sources. Governance rules. The permission model. Every one of those is under active revision, and most of them are revised by different people on different schedules, with no coordination between them.

Now consider what has to hold still for that churn to be survivable: the thing all of it plugs into.

This is the oldest pattern in systems architecture and it has never lost. TCP/IP. POSIX. The Linux syscall ABI. The OCI container spec. In each case the layer that accrued the value was not the most capable one — it was the most *invariant* one. Everything above and below was free to change violently precisely because the interface in the middle did not.

An environment is the agentic version of that narrow waist. The test is whether you can swap the model without renegotiating permissions, change inference providers without rewriting evals, add a tool without re-auditing the data path, and adopt a new governance rule without redeploying everything downstream of it.

There is a second axis here that gets almost no attention: the stack is not the only thing upgrading. The team is too. People who made governance decisions leave. Teams reorganize. Approvals granted for one configuration are inherited by people who were not in the room when the configuration was chosen. An environment that holds its shape across those transitions is institutional memory in executable form — the accumulated record of how this organization does agentic work, carried forward instead of re-litigated every reorg. That is a durability property no model, harness, or dashboard provides.

Two honest qualifications, because the strong version of this claim overreaches.
First, "never changes" is the right ambition and the wrong word. What stays fixed is the contract, not the implementation. The Linux kernel changes constantly and does not break userspace; that combination — violent internal change under a promise held externally — is the goal. An environment that actually froze would rot inside a year.

Second, stability sits in permanent tension with capability. Every abstraction that refuses to expose the newest thing underneath it eventually gets routed around by the engineers who want that thing. Cross-platform frameworks, ORMs, and unified cloud APIs all died this way. An environment survives only if its escape hatches are designed as carefully as its guarantees.

And one connection worth stating plainly, because it links this argument to the one in section 8: a stable interface you do not control is a stable interface someone else can change. Invariance only delivers sovereignty when the contract is open and specified. Otherwise it is a more comfortable cage.

So the flag to plant is this: environments are the deployable unit of agentic work. Not agents. Not prompts. Not models. Not dashboards.

And the honest caveat, which belongs in any serious version of this thesis: the container itself is not defensible. Hyperscalers, container platforms, and edge providers all reason their way to the same conclusion, and several are already building toward it. What is defensible is what the environment produces — the ledger of what was done, at what cost, against what definition of done — and the fact that both the environment and the ledger can be carried somewhere else.

That second property turns out to matter more than anyone expected, for the reason set out in section 8.

---

## III. The two pressures shaping the stack

### 7. Model geopolitics: openness as strategy, and as marketing

The first pressure is not technical.

US labs are winning on frontier reasoning, enterprise trust, platform distribution, safety and compliance posture, integration depth, and premium workflows. Chinese and open labs are winning on cost, open weights, iteration speed, local deployability, and global developer adoption.

The strategic logic behind China's openness is now explicit rather than inferred. Xi Jinping used the 2026 World AI Conference in Shanghai to endorse open source and open collaboration as national direction, which reframes individual lab decisions as coordinated policy rather than independent commercial calculation. Western analysts describe the effect in industrial terms — commoditize the layer where American firms make money, build global developer dependency on your architecture, and convert a compute disadvantage into a distribution advantage. Scott Galloway's framing of it as modern-day steel dumping is contested in its details but correct in its shape.

But the industrial account undersells the softest and possibly most effective part of the play. Openness is also positioning.

Analysts tracking China's strategy list the non-economic returns plainly. Trust: publishing weights lets anyone verify the model is what the lab says it is, rather than a wrapper routing queries elsewhere. Reach: an open model deploys on everyone else's compute, which matters enormously when your own is constrained. Branding: you present as a contributor to a shared technical commons. Control: users can fine-tune and customize in ways a closed API will not permit.

The asymmetry that creates is reputational, and it compounds. An open lab looks like it is giving something to the developer community. A closed lab charging per token for the same capability looks like it is collecting a toll on it. That perception is not fair, exactly — someone has to fund the training runs — but fairness is not how developer mindshare gets allocated.

And every open release is a capability claim that costs nothing to make and cannot be disputed, because the weights are right there. You do not need a marketing budget to argue that your intelligence is competitive when anyone can download it and check.
It is the cheapest credible advertising in the industry.

It is worth being precise about what this is and is not. This is industrial and reputational strategy, not a financial one — the frequently repeated claim that China is somehow shorting the US AI market is a markets-desk reading of what is actually policy. The distinction matters because industrial strategies invite regulatory responses, and regulatory responses are what reshape enterprise architecture.

Which produces the fork every enterprise now has to plan around: open weights become the commercial default, while a restricted, sovereignty-constrained tier persists in defense, government, and regulated industry. Most large organizations will operate on both sides of that line simultaneously.

Jensen Huang put the resolution about as tightly as anyone has: "proprietary versus open is not a thing. It's proprietary and open."

### 8. The ecosystem counterattack: when you cannot win on price, win on entanglement

Here is the pressure that gets least attention and will shape the most contracts.

If the model layer commoditizes, the businesses built on selling intelligence have a problem. They cannot out-price free weights running on the customer's own hardware. So they do the rational thing: they stop competing where they cannot win, move up a layer, and capture the things that are hardest to migrate.

Look at what that layer contains. Identity and access. Governance and policy. Evaluation frameworks. Tool and connector registries. Memory. Deployment pipelines. Compliance attestations. IP indemnification for model outputs — which some major vendors offer contractually and others do not, and which is simultaneously a genuine benefit and a mechanism that cannot be carried out the door.

These are precisely the capabilities an enterprise needs most as agents move from pilots into production, and precisely the ones that are painful to unwind. Governance is not an API call. It is a year of policy work, an audit trail regulators have already seen, and a set of internal approvals that were granted for a specific configuration.

The commercial form this takes is not a price list. It is structural entanglement:

- multi-year committed spend in exchange for preferential rates
- subsidized or free entry pricing that converts into incumbency
- credits and compute allocations that create budgetary dependency
- revenue share on AI-attributable revenue
- equity, warrants, or option grants exchanged for preferred access, capacity, or launch priority

Every one of these is already visible. The public-sector case is the cleanest illustration of the shape: in August 2025 US federal agencies obtained enterprise access to leading assistants for a nominal dollar per agency, while four months earlier a single department had signed a Microsoft enterprise agreement worth roughly $930 million a year. Loss-leader entry, incumbency exit. That is the pattern, and everyone involved knows it is the pattern.

At the top of the market the entanglement is written into the partnership structures themselves — the amended Microsoft–OpenAI arrangement preserves a capped revenue share running to 2030 and first-launch rights to 2032, even as it loosens cloud exclusivity. That is what it looks like when two of the most sophisticated parties in the industry negotiate the right to bind each other.

And the repricing power is not theoretical. Anthropic moved Claude's enterprise tier from fixed pricing to dynamic usage-based pricing in April 2026, which observers expected to multiply costs for heavy users. GitHub restricted compute on individual Copilot plans and cut access to its most capable model tier. Neither of those is a scandal; both are what a vendor does when it can. The question for a buyer is not whether a vendor would ever exercise that power. It is what your position looks like on the day they do.

The cost of being wrong is measurable.
Industry surveys put average migration cost per project in the low six figures, and a substantial majority of organizations now report actively working to avoid single-provider dependency. Meanwhile the regulatory floor is rising underneath the same question: European rules increasingly require legal guarantees around model switching, data residency, and portability — turning what used to be an architectural preference into a compliance obligation with audit rights attached.

This is where the environments argument stops being an infrastructure preference and becomes a governance position.

An environment that composes harness, model, tools, policy, and data — and that can be lifted from one ecosystem and set down in another — is an exit right. It is the operational form of sovereignty. Not sovereignty in the flag-waving sense, but in the plain one: the ability to change your mind about a supplier without rebuilding your company.

Enterprises will not achieve that by negotiating better contracts, though they should do that too. Contracts govern what happens after a decision; architecture determines whether the decision is available. A company that can move its agentic work between ecosystems negotiates differently from one that cannot, and it negotiates differently *before* the renewal, which is the only time leverage is worth anything.

The conclusion is not that a country wins, or that a lab wins. It is that the layer which can route across all of them — and move away from any of them — is the layer worth owning.

---

## IV. Where the next twelve months go

| Layer | Direction |
|---|---|
| Models | More capable, cheaper, more interchangeable. Selection becomes configuration. |
| Hardware | Local and on-prem inference becomes a serious option for real production workloads, not a compliance workaround. |
| Inference | Cost collapse drives more loops, more agents, more experimentation — and more operational surface area. |
| RAG / vector DB | Absorbed into broader context, memory, and workflow systems. Ceases to be a category. |
| Harnesses | Become the enterprise alpha layer — where proprietary context is owned and switching power is created. |
| Environments | Become the deployable unit of AI work — the invariant interface everything else plugs into, and the place governance, measurement, and portability attach. |
| Ecosystems | Retreat from model margin to governance, tooling, and context capture — enforced through committed spend, revenue share, and equity structures rather than list price. |
| China vs. US | Open labs pressure cost and openness while accumulating developer goodwill; US labs hold the premium frontier and enterprise-trust position. Enterprises demand routing across both, plus a sovereign tier. |

---

## V. What this means in practice

If you are building infrastructure, the defensible positions are the ones that survive model commoditization and resist ecosystem absorption:

- Routing and fallback as a first-class capability. Best model for the task, cheapest viable route, automatic failover, and an alert when an expensive path activates unexpectedly. This is the operational expression of commoditization, and it maps directly to a budget line, which is why it sells first.
- Unit-of-work measurement rather than token telemetry. Consumption dashboards are a commodity. Attribution of completed work — including retries, human interventions, artifact quality, and realized outcome value — is not. Whoever establishes the standard unit of agentic work shapes how the entire industry talks about value.
- Comparative environment benchmarking. Not *which model gives the best answer* but *which model, harness, and environment configuration completes the work best*, reproducibly. This is a category-defining asset if it exists early and a commodity if it arrives late.
- Portability as a product feature, stated explicitly. Export formats, no proprietary state, documented migration paths. In a market moving toward entanglement, the credible promise that a customer can leave is itself differentiation.
If you are buying, the questions have changed:

- Where does our proprietary context physically live, and who else can see it?
- What is our all-in cost per completed unit of work, not per million tokens?
- If our primary provider doubled prices, was sanctioned, or was acquired next quarter — what is the actual migration path, in weeks and dollars?
- Which of our governance, evals, and tooling assets are portable, and which only exist inside one vendor's console?
- What have we signed that makes leaving more expensive than staying, independent of the product being better?

The last question is the one most organizations have not asked yet, and the one their successors will most wish they had.

---

## VI. What would falsify this

A thesis that cannot fail is not a thesis. Four things would break this one.

Frontier capability re-opens a decisive gap. If the next generation of closed models is qualitatively better rather than incrementally better, routing logic collapses and enterprises consolidate on one provider. The commoditization argument depends on the gap staying narrow.

Ecosystems absorb the context layer successfully. The counter-argument to the harness thesis is that model vendors and hyperscalers will simply move up the stack — offering memory, evals, governance, and deployment natively, bundled, and free at the point of use — and that their economics and research velocity will outrun independent tooling. If the bundle is good enough and cheap enough, most buyers will trade portability for convenience, as they have every previous time this choice was offered.

Regulation forecloses open weights. If policy restricts open models broadly rather than sectorally, the cost-collapse dynamic weakens in the largest enterprise market and the à la carte posture narrows to a niche.

The environment layer commoditizes faster than measurement matures. If managed agent runtimes become a free hyperscaler primitive before unit-of-work measurement is established as a standard, the wedge closes and the value accrues to whoever already owns the cloud account. This is the most likely of the four, and the reason measurement and portability — not hosting — have to be the center of the argument.

---

## VII. Conclusion

The industry spent three years asking which model is best. It will spend the next three asking which system reliably converts intelligence into completed, governed, accountable work — and, quietly, which system lets a company change its mind.

Models commoditize. Harnesses create switching power. Environments make the work measurable and portable.

The next AI winners are not just the model labs. They are the systems that deploy, route, govern, and measure agentic work across many models and hardware surfaces — and that keep the exit door open.

---

## Sources and further reading

- Kyle Chan, *China's global AI strategy* — highcapacity.org
- Kyle Chan, testimony before the House Select Committee on the CCP, April 2026 — Brookings
- US–China Economic and Security Review Commission, *Two Loops: How China's Open AI Strategy Reinforces Its Industrial Dominance*, March 2026
- Chamath Palihapitiya, *Deep Dive: The Agentic AI Economy* — chamath.substack.com
- SiliconANGLE, *Alex Karp, frontier models and the real fight for Enterprise AI*, July 2026
- Adnan Masood, *Agent Harness Engineering — The Rise of the AI Control Plane*, April 2026
- Zylos Research, *Agent Interoperability Protocols 2026: MCP, A2A, ACP and the Path to Convergence*
- Collibra, *Models are commodities, context is proprietary*, April 2026
- Federal News Network, *The coming AI reckoning: Slouching toward vendor lock*, June 2026
- The Register, *Locked, stocked, and losing budget: AI vendor lock-in bites*, April 2026
- Kai Waehner, *Enterprise Agentic AI Landscape 2026: Trust, Flexibility, and Vendor Lock-in*, April 2026
- Kong, *Lock-In in the Age of AI: Risks and How to Avoid Them*, 2026

---

*Matt Wright — mattwright.eth.limo*
