---
title: "Introducing Quirq — One-click deploy for secure agentic workforce environments"
description: "AI needs a real place to work. Quirq is a one-click environment for agentic workforces, giving businesses the security, measurement, and operational boundaries needed to run AI systems at scale."
date: "2026-09-02"
category: "Thoughts"
readTime: "26 min"
---

![Quirq connects tokens, calls, and spend to verified work and cost per quirq through an observable Environment.](/images/posts/introducing-quirq/what-you-pay-for-to-what-you-can-prove.png)

**Here's the problem..**

Every company is frustrated because they can't tell you what their AI did last month. Sure, it made your company some documents, updated a spreadsheet, and helped Brian make a funny meme for the team.

We've been buying intelligence the way early factories bought coal — by the unit of input. We have a precise meter for what the machine consumes and nothing at all for what it produces. James Watt had this problem in reverse. He priced steam engines on coal saved against an older engine, which meant nothing to a buyer who'd never owned one. Those buyers owned horses. So he went and measured a horse’s performance.

AI hasn't had that moment yet.

**Here’s what we’re facing like it or not:**

**You don't have a clue what your AI has REALLY done this month.**

The token bill only measures consumption. It doesn't tell you whether the work was finished, what data the model touched, which tools it used, where the inference ran, or whether anything stayed inside the boundary you thought you'd set.

You might ask the model or model provider about these details, or perhaps you build a cute interface on Claude that gives you your performance data, but it’s likely not the full picture. You need to gather intel from the raw machine system level.

And the absence is starting to show. Microsoft told its own engineers to stop “tokenmaxxing” and started setting AI budgets by division. The firm with the largest structural interest in token consumption capped it internally. Chamath put numbers to the same thing from inside his own company: token costs doubling roughly every 45 days, incremental productivity from each doubling “maybe 5-10% at most.” What he informs is the best solution is to, “measure the output you get, and treat intelligence like any other input cost.” Facts sir.

**Agentic security is a black box and your engineer knows it.**

Agents call tools, move data, touch files, and spend money inside production systems. Every layer becomes operational — models, inference, harnesses, permissions, memory, data access, tools, cloud, hardware, orchestration — and each one expands the security surface.

Ask your engineer where an agent went last Tuesday and what it touched. Watch what happens.

![Engineer observability for agentic systems.](/images/posts/introducing-quirq/engineer-observability-hero.png)

**New models, tools, harnesses, infra are changing buyer behavior daily.**

Businesses want freedom of choice across models, inference, harnesses, tools, skills, and infrastructure. In most cases they don't care which AI is underneath. They want the system to work.

Under the hood, that usually means a Frankenstein stack of software. A buffet of models, inference providers, harnesses, permissions, memory, data access, cloud or on-prem, this machine, that machine, answer robot from your phone, push a button from your laptop. It's a mess. And honestly, that mess feels great at first. It feels powerful. It feels like the future. It feels like you finally have leverage.

But there's a difference between a clever personal setup and production infrastructure for a business.

**Dev Ops is compounding daily don’t you feel it?**

Every new agent creates more coordination burden, more monitoring burden, and more places for the system to fail. What begins as experimentation hardens into permanent operational overhead. More infrastructure to manage, more workflows to debug, more permissions to govern, more surface area to secure.

Every agent you add costs engineering time forever, not once. A system that feels productive at small scale becomes brittle, expensive, and hard to control the moment it spreads across a real organization. What looks like acceleration on the surface turns into a silent tax underneath the business.

The minute an AI model lab blocks us out of Openclaw, or an inference provider in the future gets blocked because of regulation, it will have downstream effects.

![The operational tax compounds as agentic systems add infrastructure, workflows, permissions, and security responsibilities.](/images/posts/introducing-quirq/compounding-operational-tax.png)

**All the while, we're getting locked more into these ecosystems—and this is VERY different than past tech cycles. The lock-in will sweep your business off its feet and have you by the throat before you can say “GPTTTT!”**

The labs aren't just selling intelligence anymore. They're moving up the stack into workflow, infrastructure, interfaces, memory, enterprise tooling, and the control points around deployment itself. The more of that stack they own, the harder it is for you to switch, inspect, govern, or negotiate from a position of strength.

In past cycles you were locked into software. Here you're locked into the thing doing your work. Your context, your workflows, your operating knowledge, your workforce.

**Building a single agent has become easy. Running a workforce of them, securely, observably, and at scale, remains extremely hard.**

This is an infrastructure problem, not an intelligence problem.

**Here's our solution..**

Quirq is a one-click environment for agentic workforces. We draw a circle around your entire AI setup — any model, any harness, any cloud or hardware — and then observe, govern, and meter the work that happens inside that circle. We call that circle an Environment. Environments sit inside Spaces, which is how you run fleets or your entire stack of AI slop or a lasagna of tools, models, agents instead of one monolithic platform.

That boundary is what lets us measure delivered work instead of consumption. We named that unit a “quirq”. We’ll explain that later, but let’s explore why that matters and how it works in practice. This isn’t your typical synthetic data playground…

![Quirq Environments let companies observe, deploy, and manage agentic workforces.](/images/posts/introducing-quirq/observe-deploy-manage.png)

**So why now? What's the rush...**

**Not to scare you, but we're going to see a major agentic security breach very soon, and the investor community already knows it.**

Talk to anyone in tech leadership or the investor community right now and security is the conversation. It's why the markets are ripping in cybersecurity.

But here's the irony. There are plenty of cybersecurity firms out there, and most companies have people doing cyber internally. Those teams are good. They'll identify some of the key issues. What they aren't is specialists in agentic systems or intelligence as it continues to change hourly at best.

To handle this you have to understand the agent systems, the AI underneath them, and the outdated architecture they're running against, all at the same time. That's cumbersome. Not a lot of shops can do it, and not a lot of internal security teams can either.

The bigger firms can afford to go buy that expertise. Small and medium businesses are going to have a lot of trouble. Their engineering team can't handle it, and the business side doesn't understand exactly what the system is trying to do in the first place.

It's not that anyone's doing a bad job. Nobody is set up for success. So when it happens inside your company, you won't be able to trace where the agent actually got in. The way agents, models, and infra that supports these systems is configured, we’re going to be handling different paradigms of what security used to mean. Your AI induced in more entropy is both a good thing and a bad thing. Like an employee who needed to hit the Playa for a few weeks lol! But, either an agent or employee misusing internal data for unapproved use is something we need to get ahead of.

![Sam Altman discussing security risks around increasingly capable AI systems.](/images/posts/introducing-quirq/sam-altman-openai-security.png)

**The C-suite is adjusting EOY budgets and can't account for AI ROI. They need new KPIs.**

When the C-suite reviews their AI program they're looking at how many tokens they'll burn, and a lot of these budgets were millions per month. When they ask their leadership teams what the ROI was — engineering, marketing, ops — they get arbitrary KPIs back. Ad revenue. Sales revenue. Marketing traffic. The usual KPIs in an organization. Nobody can connect the tokens to an output metric, so nobody can say what the actual utility was.

So executives with budget authority end up throwing more tokens at the problem. They don't have an answer for why they can't measure it, so the only way to stay productive and keep a foot in the AI age is to add more tokens and more tools.

It's a frustrating balance, because the engineers and managers want the hottest new infrastructure. They want to try new models. They want to tinker. A lot of them are just learning and playing, like every early innovation cycle, and it's usually benign. But we don't know exactly what they're using it for all the time.

Sometimes the AI hallucinates, or doesn't do what it was supposed to do, and burns tokens the org has to pay for. Sometimes the inference or the infrastructure isn't set up properly, so the context isn't learning and improving — it's just getting worse over time. That's why models can feel like they're getting dumber.

We tested that directly. Two operating contracts for a coding agent, matched to the same roughly 14 KB of context. The generic one left conformance stuck at its 8% floor. The one carrying a single project-specific rule lifted it to 100% for Codex and 80% for Claude. It isn't how much context you hand the thing, it's whether the context is the right context, and that's a property of the workspace it wakes up in. We wrote that up in [Relevance, not volume](https://www.quirq.ai/research/relevance-not-volume).

Either way, the C-suite and the managers are both under pressure to prove the spend is producing output, and right now they don't have the KPI that would let them argue for more AI spend and make better decisions.

![Hedgie reports that OpenAI is testing outcome-based pricing for enterprise agents.](/images/posts/introducing-quirq/hedgie-openai-outcome-pricing.jpg)

**And the obvious objection, that cheaper inference fixes this — is wrong.**

Inference is getting cheaper. Open weights, aggressive quantization, better harnesses, price per million falling faster than anyone forecast. All true, and none of it helps.

Cheaper inference doesn't reduce spend. It buys more inference. More agents, longer reasoning loops, more retries, more work that wasn't worth attempting at the old price. Agentic workloads already burn ten to a hundred times the tokens of a single-turn chat for the same logical outcome, and that multiple grows as the unit price falls.

Every price cut widens the gap between what the meter counts and what the business actually got.

**Open-weight competitors have different business economics, and it's pushing the frontier labs deeper into lock-in.**

The frontier labs have kept the traditional SaaS model we've seen in Silicon Valley for years. Build a very useful technology, charge for usage, create lock-in inside your ecosystem, keep adding accruing value to the people who are locked in and retained.

Open-weight competitors don't have to run that model. Their economics are different, so they can make a point out of price alone: frontier models should be cheaper. That makes the labs look like they don't know what they're doing, and it explodes the buyer's option set. Right now there are thousands, effectively millions, of models to choose from.

**And that's where buyer behavior turns into an argument inside the company.**

You get a C-suite asking their engineers, “what the fuck are we paying for? Ten million a month in tokens from this company, when we could do this for free with an open-weight model!!” They don't understand the actual engineering and compute requirements behind that question, but they're going to keep asking it, and they're right to.

The labs won't answer it by dropping prices. Most will move up the stack instead. They'll control how you use the model, how data moves, and what you're allowed to interact with. They want you inside their ecosystem, which is why you see OpenAI and Cursor going to war and you, the customer, become the battlefield.

Meanwhile the open-weight models get widely distributed by hardware companies and hyperscalers, because to them it doesn't matter — they want you paying for infrastructure. Inference providers pick up distribution and become the plumbing, a utility provider. The labs are the ones facing the price crunch, so they raise the price on consumers and deepen the lock-in.

And it will be great technology. It'll work really fucking well, right up to the point where people start questioning whether they should keep it. But here's the danger. Once it's expensive enough, and it's too late to unlock yourself from their ecosystem, they'll turn around and ask you to swap a percentage of your company or your public stock for unlimited tokens and usage. Then they'll use that stock as a reference for ARR, and that's how they'll drive their business.

Models, harnesses and clouds will keep changing. The environment is the only layer you can actually own, and the only place the evidence survives.

**Ok ok, wtf is Quirq?**

**Quirq** is a one-click environment for agentic workforces. It helps companies build their own agentic intranets: governed internal environments where agents, workflows, knowledge, tools, and execution can run in a portable, observable, enterprise-scalable way.

At the core of Quirq is the Environment: an isolated, portable workspace where an agent actually does work. Instead of scattering models, harnesses, tools, memory, permissions, and data access across a mess of local setups and loosely connected infrastructure, Quirq packages that stack into a self-contained unit that can be deployed in one click. Environments sit inside Spaces, which let businesses group, govern, observe, and manage fleets of Environments across infrastructure they already own.

We're not making the models better, we're not making the routing better, we're not making the computers better. Every one of those improvements makes the inside of the circle better. We refer to that space as the environment and is where we help you measure or track everything we mentioned.

We don't care how you structure your AI stack. Our tech is unopinionated and agnostic, although we as a team for sure have opinions on how you should structure your architecture!

Anyways, we give you a way to draw a hard boundary around it — any model, any harness, any router, any infrastructure — and then observe, govern, and meter the work that happens inside that boundary. When a better open model ships next quarter, you adopt it inside the same Environments. Our value goes up when the rest of the stack improves.

That matters because Quirq turns nasty AI experimentation into infrastructure a business can actually run. It gives teams stronger security boundaries, runtime permissions, durable context, better visibility into what agents are doing, and a repeatable way to deploy, upgrade, and manage agentic systems at scale. Imagine all of the reasoning, security, and infrastructure improvements that model labs can do for their model ecosystem — we can help you run in open with your existing business context, infra and intelligence and compute.

Businesses can see what work was actually done, what data was touched, where inference ran, and whether the system is producing verified outcomes instead of just burning tokens, all on their own!

In practice, Quirq gives companies more control, less lock-in, better observability, and a real foundation for measuring AI productivity as the technology spreads across the organization. We imagine every environment is unique, capturing unique inputs and outputs — hence, we named the company Quirq, for YOU, your space, being one-of-a-kind and different from the rest.

![Quirq draws an Environment boundary around models, harnesses, tools, permissions, memory, and infrastructure.](/images/posts/introducing-quirq/how-quirq-works.png)

**An Environment is the missing piece.**

Right now most agents wake up in a void — a chat window, a temporary sandbox, or a thin harness with almost no durable state, almost no real permissions, and almost no reliable record of what actually happened.

An Environment is the isolated, portable workspace where an agent actually does work. It packages the runtime, the selected model and harness, memory, tools, data access, constraints, permissions, and activity record into one self-contained unit that can be spun up in one click.

Put more simply, we draw a circle around your entire AI setup.

That circle is what makes the system portable, governable, and observable. Instead of relying on tribal knowledge, local machine state, or a pile of loosely connected tools, the business gets a real operating workspace for agentic work.

The clearest way we've found to explain it: if everyone on your team is an agent, how do you manage one the way you manage a work laptop? When someone leaves, does the device get shut down or reassigned? When an agent goes off to do work for a client, what are its permissions? Those questions have boring, well-understood answers for human employees and almost no answers at all for agents. The Environment is where the answers live.

![Quirq system architecture showing persistent Environments independently from temporary runtime compute.](/images/posts/introducing-quirq/system-architecture.png)

**Once the Environment holds the state, it creates three boundaries that didn't exist before.**

The Environment defines the security boundary, controlling the permissions, network access, and spend limits the agent operates within.

The Environment defines the measurement boundary, capturing what happened, what changed, what tools were used, where inference ran, and whether the result met the bar for success.

The Environment defines the operational boundary, giving teams a controlled way to replicate, upgrade, govern, and roll out workspaces across the business.

This is not a better chat interface. It is not another temporary sandbox. It is not just a harness with a pretty wrapper. This is machine-level code and DevOps that scale your agentic engineering within existing infrastructure.

**A VPS can host compute. An Environment can host work.**

Your dad has a VPS. An Environment is not just a rented box with a containerized open source harness running on it. It may look like that from the outside, but that misses the point entirely. The value is not that something is running somewhere. The value is that the workspace is defined, portable, governed, observable, measurable, and deployable across a real organization.

A harness can be an environment, but an environment doesn't have to be a harness. One gives you a machine. The other gives the business a controlled operating unit for agentic systems.

![Quirq is more than a VPS, container, harness, or model router.](/images/posts/introducing-quirq/what-quirq-is-not.png)

**Observe, Deploy, Manage your environments**

**Your team needs to know what your AI is doing…**

Because the work happens inside a boundary we hold, the record is a side effect of hosting it. There's no SDK to wire in, no spans to define, no wrapper around your agent calls, and no decision to make about what to log before you know what you're going to need.

What we capture is what the agent produced as artifacts, not prompts. Files written, PRs opened, tickets closed, records changed. Alongside that: which tools it called, what data it touched, where inference ran, what it cost, how long it took, and every time a human had to step in.

![A Space knowledge graph showing projects grouped across engineering, marketing, research, documentation, and operations Environments.](/images/posts/introducing-quirq/space-environment-knowledge-graph.png)

Then the same record answers two very different questions. Your engineers get to ask what actually happened — where the agent went, what it touched, on whose behalf, and whether it stayed inside the permissions you set. Not the agent's summary of its own run, the captured state. And your operators get to ask what the spend bought, which Environments are producing work, which are producing invoices, and which model and harness combinations are getting more efficient over time.

And this isn't theoretical. We ran one coding agent against one fixed task across six escalating levels of project context. Every environment finished the task, and the richest ones spent up to 36% fewer tokens doing it, with caching serving 88 to 96 percent of the input. Same agent, same task, and the only thing that changed was what the Environment gave it to work with. The full pilot is in [how the Environment affects agent performance and token cost](https://www.quirq.ai/research/environment-and-token-cost).

**One-click deploy for agentic teams — any harness, any model, any infra**

We enable teams to deploy agents with any harness, any model, and any Terraform-compatible cloud or hardware. We meet your org where it's at. You shouldn't have to onboard your team to a new workflow before understanding what actually needs to ship faster, where the org needs to learn more efficiently, and where the most impact could be optimized in the agentic system.

You name an Environment and press deploy. Behind that: we find the region closest to you, provision a container, run the runtime scripts, open an SSH connection, mint a wallet, and hand you a machine. Five seconds.

Then you connect what it needs. OAuth into Claude or GPT. Data connections. A vault for the secrets you don't want the agent holding directly. GitHub by token or OAuth. All of it configurable before launch, so a team spins up in an identical known state every time rather than in whatever state the last person left behind.

There are multiple ways in — terminal, browser IDE, SSH from VS Code or Cursor, or a plain interface — because people work differently. What we install is the container, the harness, and the observability API. Everything past that is your script. Underneath it is a Linux machine with ports, and you can do what you like with it.

![One portable Quirq Environment can ship across cloud, on-premises, and local infrastructure.](/images/posts/introducing-quirq/environment-shape-ships.png)

And the runtime is cheap because provisioning works like an Airbnb for agents. We take spot compute from major providers that's discounted as much as 80% because it can only be rented for brief periods of time. Most businesses can't use this. We can. The agent uses the compute for the moment of request, then we kill the container and move it to the next one. The compute is temporary but the Environment persists, so you cut runtime cost without losing the context, permissions, and record that let the workspace keep improving.

**Manage your team’s workspace, output, permissions, controls**

An Environment is one workspace. A Space is how you group them, by team, by project, by client, by risk level. That's where the operational answers live: which setups are working and which people are fighting their stack, what happens when a better model ships and you want it everywhere instead of sending a company-wide email asking everyone to upgrade, and what happens when someone leaves and their workspace needs to be reassigned instead of walking out the door on a Mac mini.

And when something goes wrong you quarantine instead of shutting down. If there's a threat to the business, a model, or the infrastructure, the boundary means you can stop or run forensics on exactly the Environments affected while the rest of the workforce keeps running. Incident response at the level of one desk, not the whole building.

**Why you ask? Intelligence, Compute, and now… the Observer**

There are two layers everyone already builds on. Intelligence — the model. Compute — the machine it runs on. Every vendor in this market sells one or the other, and both are getting better and cheaper on a curve nobody needs convincing about. We think there's a third, and it isn't a feature of either one.

**The Environment is the observer.**

If you want to know what an agent did, you have two obvious places to ask and both of them are compromised.

Ask the intelligence layer and you get a report generated by the thing you're investigating. Research on chain-of-thought faithfulness has been converging on this for a while: a model's stated reasoning is frequently a plausible account rather than a faithful one, post-hoc rationalisation that reads well and doesn't necessarily correspond to the process that produced the result. There's published work showing models can generate reasoning convincing enough to fool monitors built specifically to catch this. It isn't deception, it's that self-description was never a measurement instrument.

Ask the compute layer and you get consumption. CPU seconds, tokens, latency, spend. Real numbers, and they tell you nothing about whether the work got done or stayed in bounds. So you're stuck. The layer that knows what happened has a stake in the answer, and the layer that has no stake can't see past a CPU counter.

It's worse than it sounds, because agents don't reliably read what you already gave them. We ran 84 controlled runs on environmental curiosity across two coding agents and seven progressively richer environments, and the agents read the surface and skipped the substance — the curated memory we built specifically for the task got opened in 1 of 12 runs. If it won't open the file you left for it, you should not be taking its word for what it did. That study is [The incurious agent](https://www.quirq.ai/research/the-incurious-agent).

**So the observer has to sit outside both.**

The Environment doesn't ask, it captures. State before the agent starts, state after it reports back, and everything that crossed the boundary in between — tools called, files touched, data moved, where inference ran, what it cost. Completion is scored by comparing the world to the definition of done that was written in advance, which is why the unit is minted rather than reported.

**And this gets more necessary as models get better, not less.**

As models become more capable and more autonomous, the gap between what a system reports and what it did doesn't close, it widens. Longer chains, more tool calls, more decisions made without a human in the loop, more surface where a plausible summary diverges from what actually happened. Better models don't make this easier. They make the reports prettier.

**Agents optimize what their environment measures, not what you intended.**

If the environment measures tokens, you get tokens. If it measures activity, you get activity. If it measures verified outcomes against checks the owner wrote, you get verified outcomes, and you find out fast which checks were weak. Whatever holds the boundary is what your agents are actually optimizing against, whether you wrote it down or not. Most companies don't hold a boundary at all, so nobody knows what their agents are optimizing against.

**Everybody meters the input. Nobody meters the output.**

Stripe just paid $7.5 billion for OpenRouter. Not for the routing, for the meter and to be the toll troll when it comes to buying intelligence like the utility company. Eight million developers, four hundred models, and a real-time view of where AI spending moves next. The payments companies figured out before most engineers did that the money in this layer is in watching the money.

Every serious technology gets two meters. Electricity has the watt going in and lumens, ton-miles, output per shift coming out. Labor has the hour on one side and the deliverable on the other. An economy learns to use a technology exactly as fast as it learns to read both meters against each other. AI has one, and the one it has is now owned by Stripe.

**So we built the other one. We call it a unit of work — a quirq.**

Start with the object being measured. A unit of work is a discrete piece of work with three properties: a definition of done stated before execution, a result that can be verified by comparing state, and a single owner accountable for accepting it. That's the object, and it's ownable, checkable, and settleable.

The quirq is the unit of measure applied to it. One quirq is one unit of verified, owner-valued, delivered work. The name is short for quantum of irreducible work, the smallest amount of delivered work the system can verify and account for. The unit is defined by three inputs, and each one is governed in a different place.

The full construction is written up in the research: [The quirq for the unit itself](https://www.quirq.ai/research/the-quirq), [the unit of work for the contract that replaces the prompt](https://www.quirq.ai/research/unit-of-work), and [the quirq calculus for every calculation in quirq accounting](https://www.quirq.ai/research/the-quirq-calculus) from the scoring rule through to the energy bridge.

**Intent and budget is human, priced before execution**

The owner states what “done” means as a set of decidable checks, each with a weight, and assigns the outcome a budget: what reaching it is worth. That task now carries a fixed number of potential quirqs. The budget is denominated in your currency, so inside your company one quirq equals one dollar of delivered work, which makes quirq totals directly comparable to payroll, vendor spend, and revenue.

**Completion — machine, computed from state.**

The Environment captures world state before execution and again on return, evaluates each check against the after-state, and produces a completion score between zero and one. Multiply the score by the budget and you have quirqs minted. Completion is a property of the world rather than of a report, and the score never reads the agent's account of what it did. An agent does not mark its own homework.

**Cost is metered, and it's complete because the Environment is already holding everything**

Against every minted quirq the Environment meters everything production consumed: inference tokens by model, CPU and GPU seconds, external API calls, storage, and the human intervention minutes spent when a check failed. That last term is the one most tooling omits and it's usually the largest. An AI program whose every output requires twenty minutes of senior review is paying its biggest cost in a currency the token bill never sees.

**The token and the quirq are two sides of the same thing.**

The token meters the machine's draw on the world, compute and energy and cost. The quirq meters the world's change by the machine, outcomes delivered at human-assigned value. Neither replaces the other, and dividing them gives you the numbers that were missing.

**What a business actually reads**

- **Cost per quirq** — the all-in cost of one unit of delivered work, split by work type, so it can be compared against the human baseline. A contract review at 13 cents per quirq against a paralegal-hour baseline is a decision, not a vibe.

- **Quirq Efficiency Ratio (QER)** — quirqs delivered per all-in dollar.

- **Quirq velocity** — quirqs delivered per unit of time.

- **Intervention rate** — the share of units that required human rescue.

The number on any given month doesn't tell you much. The direction does. QER rising while intervention rate falls means AI is compounding inside the company. Both flat while token volume climbs means you bought an electricity bill.

We worked a full quarter through this. Token spend rose 83%, which read alone looks like waste, while verified value per all-in dollar rose 81% and human rescue fell by a third. Same quarter, two meters, completely different story. The worked ledger is in [The company dashboard](https://www.quirq.ai/research/the-company-dashboard).

**And this is where measurement turns into security.**

Notice what we had to capture to score that work: what the agent touched, which tools it called, where inference ran, what changed in the world when it finished. That's the same record your security team is asking for. Your finance team wants to know what they spent. Your security team wants to know what happened that shouldn't have happened. Both of them are asking about the same record, and neither can get an answer without a baseline of what normal looks like in the first place.

Once the boundary is holding that record, here's what it catches:

- An Environment that burns cost and mints nothing is doing something nobody defined, whether that's a runaway loop, a bad config, a hijacked instruction or work happening outside its scope, and on the token bill that only shows up next month as a bigger invoice.

- A climbing intervention rate means checks are failing and somebody keeps having to step in, which is the system drifting well before anything breaks in public.

- We can see which tools an agent called, what data it touched and on whose behalf, measured against the permissions that Environment was actually given.

- We can see where the inference ran, which is the difference between proving your jurisdiction and arguing about it.

- We can see work that passed its checks but missed the intent, because the score comes from captured state rather than the agent's own account of how it went.

**AI horsepower without a boundary is just a risk you haven't priced yet.**

Every move that raises your horsepower widens your attack surface. Cut human review, you remove approval gates. Route to cheaper inference, you have less scrutiny over where the data went. Broader permissions, fewer blocking checks. More agents, more coordination surface. So the team pushing hardest on efficiency isn't being reckless. They're just running up a bill nobody's written down yet.

The boundary is what lets you move fast without flying blind. You can hand out broader permissions because every use of them is on the record. You can route to the cheap provider because you can prove where the data went.

**Getting started**

Ok, so this sounds interesting to you and you want to observe your AI and/or make your AI program more efficient. We're here to help in either case. We recommend getting started with [our open source repo](https://github.com/quirq-ai/xo-space), Spaces, or deploying agents on our managed cloud at [beta.xo.builders](https://beta.xo.builders). Please give us feedback in public, and be harsh.

Once you give those a shot, we're happy to answer more questions around your current architecture or infrastructure issues when it comes to AI. We're happy to guide your team toward token optimization, agentic security, and better use of your existing stack.

**We want to chat with your engineers!**

[Get in touch to get a free analysis](mailto:hello@quirq.ai) of your new AI program.

[Get in touch if you already know](mailto:hello@quirq.ai) you want to license this for internal or external observability, deployment or management.

**Get started**

- Install Quirq: `curl -fsSL quirq.ai/install | sh`
- [Browse the open-source Space repository](https://github.com/quirq-ai/xo-space)
- [Launch an agent on our managed Cloud](https://beta.xo.builders)

**See it working**

- [Watch the two-minute agent provisioning demo](https://youtu.be/NVJxt-ydY3k)
- [Watch OpenClaw provisioning on Quirq and Nebius](https://youtu.be/lrM7Jk4HvOo)
- [See how observability works](https://docs.quirq.ai/docs/space/observability)
- [Explore the Space Walk interface](https://docs.quirq.ai/docs/space/space-walk)
- [Read the managed Cloud provisioning guide](https://docs.quirq.ai/docs/cloud)

**Go deeper**

- [Read our research notes](https://www.quirq.ai/research)
- [Read the Quirq whitepaper](https://www.quirq.ai/whitepaper)
- [Browse the documentation](https://docs.quirq.ai)
- [Join the Quirq community on Telegram](https://t.me/+4K3HQfoxfK00YjFh)
- [Follow Quirq on X](https://x.com/quirq_ai)
- [Email me](mailto:matt@quirq.ai)
