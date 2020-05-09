'use strict';
const uuid = require('uuid')

const articles = [
  {
    title:"Lawrence Wright On The Politics Of The Pandemic",
    author:"Crystal Butler",
    content:`"It’s unnerving to read the newspaper and feel like I’m reading the next chapter of my book," says Lawrence Wright.

    Reading Lawrence Wright’s new pandemic novel, The End of October, is a surreal experience. In the book, a terrifying new virus spreads rapidly across the globe. Politicians initially brush it off as just like the flu, and there’s a debate over whether people are overreacting. Soon millions are infected and everyone is sent home while scientists scramble to develop a vaccine. Grocery stores are mobbed, there’s a shortage of masks and ventilators, and leaders argue about when and how to reopen society. Wright predicted our current reality with uncanny precision, and as a reader that’s both oddly satisfying—wow, how did he know they’d be setting up tent hospitals in parking lots?—and disturbing.
    
    One key difference is that the fictional virus is much more deadly than the real one, with a 50 percent mortality rate. By the book’s midpoint, near-total societal collapse has set in, and our hero, mild-mannered scientist Henry Parsons, just wants to know if his family is still alive. A gruesome scene in which a character is eaten by her cats prompts both anxiety and reassurance: at least things in real life could never get that bad—er, could they?
    
    The Austin author, a former Texas Monthly staffer, draws on the meticulous research skills that earned him a Pulitzer Prize for nonfiction. He brings the same obsessive level of detail to his second novel that he did to nonfiction works such as The Looming Tower, Going Clear, and God Save Texas. The End of October also offers a rich history of pandemics, from the salmonella outbreak that destroyed the Aztec empire to the 1918 flu. Wright spoke with Texas Monthly about what it’s like to release a pandemic novel during a pandemic.
    
    Thank you for reading Texas Monthly
    Now more than ever Texans are connecting over shared stories. Enjoy your unlimited access to our site. To have Texas Monthly magazine delivered to your home, become a subscriber today.
    
    It’s clear that you did extensive research for this book. What did that process look like?
    
    I got so caught up in the lore of public health and its history. Health and disease are not normally considered to be a big part of the sweep of history. It’s all about wars and depression and colonization. But disease is a very influential factor in human history. I also liked being in the world that these public health officials live in—the epidemiologists, virologists, and microbiologists. They’re so brilliant and so courageous.
    
    There are a lot of unnerving parallels to reality in the book, but the one that feels most timely is the political situation. On Monday, Governor Greg Abbott announced that he’s allowing stores and restaurants to reopen, and many people are worried about a second wave of infections—which is exactly what happens in your book. How has it felt to watch that play out?
    
    I don’t want any more parallels with the book to occur! It’s unnerving to read the newspaper and feel like I’m reading the next chapter of my book. The book is meant as a kind of cry of warning, and I didn’t expect it to come out in the middle of a pandemic. 
    
    The idea of a second wave comes from looking at how influenza behaves. Coronavirus may behave like influenza and return in the fall, or it may not. It’s similar to influenza in that it is an RNA virus, and that means it’s able to mutate. But this one so far has seemed pretty stable. The coronavirus is an eccentric and puzzling disease—we’re learning so much about it, but it doesn’t look like anything I’ve studied before. 
    
    Surely we’ll see a bump in coronavirus cases as the Texas economy starts to reopen.
    
    We will. We have to measure the danger to public health against the danger to the economy, and there’s risk involved. Governor Abbott’s plan is dependent on having widespread testing. The governor says he feels Texas will perform that adequately—but it has to, or we’re going to be in big trouble.
    
    Once the fictional pandemic has led to a media collapse, Austin conspiracy theorist Alex Jones is the last voice left on the airwaves. Can you talk about the role of misinformation and conspiracy theories in a pandemic?
    
    In a truly dysfunctional world, Alex Jones would be king. The most important thing for government to do in the face of a pandemic is to tell the truth. When they spin, dodge, or bury the truth, it creates distrust—and in that void conspiracy theories prosper. That’s what’s happening right now. People are confused, and there’s an absence of leadership. So naturally, explanations arise without any basis. It’s dangerous, just as it’s very dangerous to suggest off-the-cuff that drinking disinfectant would be a treatment. 
    
    That’s one area in which reality seems worse than fiction. The president in The End of October mostly stays silent about the pandemic, while ours has been actively peddling misinformation.
    
    It’s really dismaying. It’s one thing to have it come out that way in the novel, but it’s really sad to see it happen in real life.
    
    Another similarity is the rise in hate crimes. In the book, the virus breaks out at the Hajj in Mecca, and then Muslims are targeted. In reality, there’s been a surge in hate crimes against Asian Americans. Is that something else that’s happened throughout history?
    
    Oh, yes. Whenever you have a formidable disease outbreak, it’s freighted with accusation and shame and stigma and blame. If you go back to the Black Death in the fourteenth century, thousands of Jews were burned at the stake, accused of poisoning the wells. In the Renaissance, venereal disease was called “the French disease” by the Italians and “the Neapolitan disease” by the French. It’s always the case that people want to blame someone else for their misfortune. And now we see the United States accusing China of cooking up the disease in a lab or letting it escape somehow, just as the Russians, the Chinese, and the Iranians are saying we did it, that it’s a bioweapon. These are very dangerous, unproven accusations that could have horrible consequences.
    
    What kind of consequences?
    
    In the novel, I take the geopolitical rivalries that are obvious already and see what happens if I stress those relationships with a pandemic. Those fractures get wider, the hostilities get stronger, and then war can break out. 
    
    The attempt, especially by Russians and to a lesser extent by China, right now to blame the United States for this disease—it really troubles me. I think that the degree to which ordinary Americans now hate the Russians and the Chinese because of this behavior is really quite high. So the idea of retaliating in some fashion is bound to arise, and that’s something we’ll have to confront.
    
    What do you recommend to readers seeking more pandemic stories?
    
    The one most appropriate for Texans is Pale Horse, Pale Rider by Katherine Anne Porter. She was the first great writer Texas produced, and the novel reflects her own experience. She was a young reporter in Denver in 1918 when she got the flu, and she was deathly ill. Her newspaper actually set her obituary in type. When she awakened she was bald, and her hair grew back white for the rest of her life. But out of that tormenting experience she wrote a great novel.
    
    Many pandemic narratives follow a trajectory that concludes with life returning to normal. Your book doesn’t quite end that way. What do you think our new normal will look like?
    
    Wars, depressions, and pandemics expose the society that you’re living in. If you look back at the Black Death, it closed the door on the Dark Ages and opened the door to the Renaissance. If you look at the Great Depression, American society was completely reshaped because of it, made much stronger and more cohesive. With World War II, America took another great leap and became the most powerful country in the world. So we’ve had these disasters placed in front of us that we turned into great successes.
    
    On the other hand, 9/11 was a moment when I remember feeling so strongly that we would have to stand for something now, that the America that our parents gave us had declined in some ways and we had to reclaim it. And yet what we did as a country was to invade Iraq, a catastrophic mistake. We’re at a fork in the road where we can remedy the faults in our society and make a better country, or we can ignore that opportunity and make a fatal mistake. `,
    date: new Date("Jun. 6, 2019"),
    image:"images/politics1.jpeg",
    category:"politics",
    views:15
  },
  {
    title:'Coronavirus Offers Another Lens On How Trump’s Politics Works',
    author:'Renesmae Daly',
    content:`One should be cautious, though, about taking that praise at face value.

    Consider the context for Murphy’s praise of the federal government and of the president. He began the day with an appearance on “Fox & Friends,” a Fox News network show that Trump watches religiously. On it, he began by thanking Trump and noting that the president has “a lot of New Jersey blood on his team.” He then explained what he needed from the government.
    
    Later, he appeared with Trump in the Oval Office. In front of a gaggle of reporters and a placard promoting the federal efforts, Murphy repeated his praise and the line about the Jerseyans on Trump’s team. He thanked Trump explicitly no fewer than 11 times, with cameras rolling.
    
    “An honor to be with you,” Murphy said at one point. “And this is a big deal for us. Thank you.”
    
    “Thank you very much,” Trump replied. “And, by the way, he's a Democrat, so I'm getting myself in trouble, but that's okay.”
    
    Back in New Jersey a few hours later, Murphy had an announcement: The federal government was providing the state with a massive amount of protective gear and much-needed testing material.
    
    Again, it's possible that Murphy's effusive appreciation for Trump was sincere. It's also possible that he understood that a way to ensure receipt of the material he needed was to go on Trump's favorite show to offer him praise and then to praise him more while posing for the media in the Oval Office.
    
    If there’s any question about the utility of Murphy’s doing so for Trump, his campaign made clear this week that it sees encounters like the one with Murphy as useful. It released an ad showing a number of Democratic governors similarly expressing their appreciation for the government’s efforts. Trump wasn’t getting himself in trouble by posing with Murphy; he was getting something that his team sees as politically beneficial.
    
    This difficulty in differentiating between sincerity and sycophancy in appealing to Trump has been an undercurrent to the Trump administration. It became a center of national attention several months ago as Trump faced impeachment for his interactions with Ukrainian President Volodymyr Zelensky. Then it was Zelensky who was in the position of lavishing Trump with appreciation as Trump finagled for something he found useful: information that would cast former vice president Joe Biden in a negative light before the November election.
    
    Trump was impeached for the pressure he put on Zelensky — pressure Trump still claims didn’t exist. In his July 25 call with the Ukrainian leader, Trump used a phrase that has come to embody the sense that everything from the president is transactional: After Zelensky raised the idea of buying weapons for Ukraine’s ongoing conflict with Russia, Trump replied by saying that he wanted Zelensky to “do us a favor, though.” Over the ensuing months, the evidence that surfaced suggested that Zelensky understood how the transaction would have to play out. The pressure he faced was occasionally explicit but usually tacit.
    
    During the trial that followed the impeachment, Rep. Adam B. Schiff (D-Calif.), one of the House members leading the prosecution, offered an analogy that resonates in the moment.
    
    “Would we say that you could, as president, withhold disaster relief from a governor unless that governor got his attorney general to investigate the president's political rival?” he asked hypothetically. “That to me is the most dangerous argument of all. It's a danger to have a president who would engage in this conduct.”
    
    Trump didn’t do that. But it’s certainly not a stretch to wonder whether governors scrambling to address coronavirus outbreaks are in positions like Zelensky’s. Maybe the Trump administration isn’t specifically demanding public tribute. But maybe the governors also understand that paying tribute is the easiest way to get the material they need to protect constituents. If you’re a Democratic governor forced to choose between expanding testing and care for state residents or withholding a small political benefit from Trump, the choice is simple.
    
    It’s by no means outlandish to suggest that Trump might be evaluating the political utility of his decisions in during the coronavirus pandemic. His briefings on the subject have included repeated efforts to demonstrate how well he was doing and constant efforts to redirect blame. And during a news conference Thursday, he made an explicit reference to the political utility of his decisions related to the virus.
    
    He was asked about providing assistance to states seeing budget shortfalls due to the pandemic.
    
    “So what’s happening is the Democrats have come to us, and they’d like to do a phase four” of funding, Trump said. We will think about what’s happening. They want to help the states, they want to help bailouts, and bailouts are very tough. And they happen to be Democratic states. It’s California, New York, Illinois, you start with those three.”
    
    “The Republican states are in strong shape,” he added. “You know, I don’t know, is that luck or is that talent? Or is it just a different mentality?”
    
    This isn’t really true. As Slate’s Jordan Weissmann noted Wednesday, red states are often similarly threatened by the economic damage from the virus. Moody’s Analytics estimates that more states that supported Trump in 2016 will see shortfalls as a result of the virus than states Trump lost.
    
    The 2016 vote doesn’t always correlate to the party that holds the governor’s seat, of course, as in the state predicted to fare worst, Louisiana. It seems a bit of a stretch to suggest that the state’s fortunes are entirely a function of a Democrat who has been in office since January 2016 and not the state’s consistently Republican legislature. The politics are also tricky in Kentucky, a state whose senior senator has insisted that states not get any “bailouts” from the federal government.
    
    “Republican states are doing very well. Maybe the Democrats should have brought this up earlier when we wanted certain things,” Trump added on Thursday. “They want to do things, and the Republicans are in a much better position from — I don’t want to use the word negotiating position, but we really, we’re in a negotiating position that’s different, because they want to bail out various states.”
    
    He offered some examples of states that were doing badly — Illinois/blue — or, well, like Idaho and Iowa, both of which are red. Moody’s estimates that all three states will see shortfalls due to the virus, Iowa a minor one but both Idaho and Illinois with shortfalls of more than 10 percent of 2019 revenue.
    
    “I think we want to take a little bit of a pause,” Trump said, “but if we do that, we will have to get something for it. Okay?”
    
    And that’s the point, right there. If states want to get something — specifically to avoid the massive negative effects of budget shortfalls stemming from having to close down in order to lower death totals from the pandemic — they’re going to have to give something, too. Maybe that’s a politically useful photo op. Perhaps it’s something else that might benefit the administration and/or Trump’s reelection bid, like an infrastructure package that conforms to what Trump wants to see.
    
    Politicians are political. This isn’t a new development. What’s stark in the Trump era is the extent to which politics has primacy. That it can be hard to differentiate between what Trump wants for himself and what he wants for his base and what he wants because he thinks is best for the country overall. That, at times, it’s not hard to differentiate between them — and the balance seems to weigh more toward the former concerns than the latter.
    
    Murphy raised the subject of the budget shortfalls when meeting with Trump on Thursday.
    
    “We've been crushed as a state,” Murphy said. “As you know, it's a state you know very well. We have 6,770 fatalities. But the curves, thank God, are beginning to show promise. And we're beginning to take some baby steps on that road to reopen. In fact, we've announced that, as of this weekend, our state and county parks, golf, under certain protocols, as of Saturday morning will be able to be open again.”
    
    One major golf course in New Jersey, of course, is Trump's private club in Bedminster.
    
    “Good,” Trump replied.
    
    “And that’s a step on that road,” Murphy continued. “And again, we couldn’t be making the progress we’re making without you and your administration. And so to you and to your incredibly talented team with a very heavy dose of New Jersey blood on your team, including yourself —”
    
    Trump laughed and said, “That’s true.”
    
    “— who knows that state extremely well, we thank you for everything,” Murphy continued. “And again, financially, that’s another topic we’ll — you know, we’ve been crushed, and I appreciate your consideration on the financial side going forward as well.” That is, on the budget.
    
    “So thank you for everything,” Murphy concluded.
    
    “Thank you very much,” Trump replied, then changed the topic.
    
    When a reporter asked about it later, Murphy noted that the money would “allow us to keep firefighters, teachers, police, EMS on the payroll, serving the communities in their hour of need. And that’s something that we feel strongly about.”
    
    Murphy said it wasn't a bailout.
    
    “We see this as a partnership, doing the right thing in what is the worst health-care crisis in the history of our nation,” he added. “And I want to again thank the president for an extraordinary spirit of partnership across the whole spectrum of our needs. And I want to reiterate that. Thank you.”
    
    Trump said it was a “tough question,” but he did offer one olive branch — he praised Murphy personally.
    
    Give a little, get a little.`,
    date:new Date('Jul. 15, 2019'),
    image:'images/politics2.jpeg',
    category:'politics',
    views:12
  },
  {
    title:'Connecticut Politics Week In Review: Some Businesses Can Begin Reopening May 20 Under Gov. Ned Lamont’s Four-phase Plan',
    author:'Zaina Marsh',
    content:`COVID-19 hospitalizations have been on the decline for more than a week, prompting Gov. Ned Lamont to give his first glimpse of a vision for reopen businesses and restarting Connecticut’s economy. The short version? It will be a step-by-step process driven by public health considerations. That process begins May 20 but will extend into next year. And things that have become our new normal – like face masks and social distancing – aren’t going away anytime soon.

    Some businesses can begin reopening May 20: Lamont’s reopening task force has recommended certain businesses that can reopen starting May 20 with safety precautions in place, like requirements to wear masks and limit capacity. Restaurants, for example, would be allowed to open for outdoor dining. Bars would remain closed. Offices could begin to reopen, but workers who can telecommute are encouraged to do so. Also slated for reopening on May 20 are nonessential retail businesses that have been closed since mid-March. Nail and hair salons could also begin to operate with restrictions in place. Those businesses would be among the first phase of a four-phase reopening plan that calls for a gradual loosening of restrictions. Lamont said he planned to release more information about whether schools would be canceled beyond May 20 and guidance on social gatherings this coming week. Indra Nooyi, the former PepsiCo CEO who is co-chair of the advisory group, said there would be at least four weeks and likely more between each stage of the reopening plan. It is unlikely that large gatherings, like a Hartford Yard Goats baseball game, will be allowed this year, Lamont said. The types of businesses that would be allowed to reopen May 20 represent about 30% of the more than 430,000 unemployment claims filed since mid-March, though it’s unclear how many of those people would return to work as businesses operate with the new restrictions in place and some customers may remain hesitant to return.

    State projects fiscal impact of COVID-19: Connecticut is facing a deficit approaching $1 billion in the current fiscal year that ends June 30 and a budget gap estimated at $2.3 billion in the following year as coronavirus-related shutdowns decimate the state’s economy and send tax revenue plunging downward. “COVID has been tough on our physical health, it’s been tough on our mental health and it’s been tough on our fiscal health,” Lamont said Friday. Fiscal analysts have projected a decline of more than $1 billion in sales taxes alone. State officials said they hope to close those budget gaps through spending cuts and by dipping into the state’s $2.5 billion rainy day fund, avoiding the need for significant tax increases. Lamont also hinted at asking for concessions from state employee unions. The state’s Special Transportation Fund has also taken a fiscal hit as gas tax revenue drops sharply. Its now projected to be insolvent by July 1, 2021.

    Towns ease burden with 0% budget increases: Cities and towns across the state have adjusted their municipal budgets to reduce spending and limit tax increases, seeking to ease the burden on taxpayers who may have lost jobs or income due to the coronavirus pandemic. “What we can do is work hard to run our city well, doing the very best we can for our taxpayers and that’s what I believe we have done,” Middletown Mayor Ben Florsheim said in proposing what he said is the city’s first “truly flat budget” in decades. In West Hartford, a $308.7 million annual budget proposed in March was reduced to $299.9 million, reversing a 3.59% tax increase to a 0.14% tax cut. “We are addressing not only the most serious health crisis in our lifetimes, but an economic challenge that soon may also be historic,” said Manchester Mayor Jay Moran. His town also adopted a no-tax-hike budget.

    ‘Track and trace’ program launching in mid-May: To blunt the potential resurgence of COVID-19 cases as businesses begin reopening and social gatherings resume, Connecticut will launch an extensive contact tracing program to isolate those who become newly infected and make sure those people they have been in contact with get tested themselves. The “track and trace” program, as state officials have referred to it, would rely on public health officials and volunteers as well as technology to reach out to those who test positive for the virus. Participation would be voluntary, and the plan does not involve enforced quarantines of those infected or their close contacts. People's movements would also not be monitored. Those who test positive would receive an automated text message informing them of the results and directing them to a confidential, online questionnaire. Officials hope to get the program up and running in mid-May as expanded testing becomes available.

    Hayes quarantining after husband tests positive: U.S. Rep. Jahana Hayes is quarantining at her Wolcott home after her husband Milford, a Waterbury police detective, tested positive for COVID-19. Hayes said in a written statement Thursday that she tested negative for the virus but will remain in her home for two weeks “out of an abundance of caution.” Congress is in recess until at least May 4. “While some are clamoring to return to Washington to conduct in-person business, this test result in my own family has reinforced that we still have a ways to go – and there is still real danger in a premature return to regular order for Congress and the country, without appropriate precautions,” she said. According to GovTrack.Us, more than 50 members of Congress have tested positive for COVID-19 or have quarantined themselves after having contact with someone who had the virus.

    First COVID-19 death at state-run psychiatric hospital: The first patient at a state-run psychiatric facility has died of COVID-19, the Department of Mental Health and Addiction Services announced Thursday. The death came at Connecticut Valley Hospital, where as of Thursday 41 patients had tested positive for the virus. It was announced the same day the Connecticut Legal Rights Project filed a federal lawsuit seeking the release of psychiatric patients at CVH and the Whiting Forensic Hospital to protect them from the coronavirus. “The risk of remaining in those units, where there is no change for appropriate social distancing, is you basically are leaving people there to be sitting ducks to catch this virus,” the project’s executive director, Kathy Flaherty, told The Connecticut Mirror. The state says it has taken steps to prevent the spread of COVID-19 in psychiatric facilities including restricting visitors and reducing capacity but advocates like Flaherty say more must be done.

    Longtime Ridgefield First Selectman Rudy Marconi has recovered after contracting COVID-19 last month and appeared alongside Lamont Wednesday to share his story. Marconi, 71, said he was never admitted to a hospital but was on oxygen for eight days after contracting the virus in early April. He said his symptoms included aches, chills, pains, sore throat, headache, nausea and diarrhea. Marconi said his experience should be a lesson to others that COVID-19 restrictions should be lifted in a careful manner. “We cannot open too soon, please believe me,” he said. ... Former Connecticut Sen. Chris Dodd has been tapped by Joe Biden’s presidential campaign to help the ex-vice president select a running mate. Biden has committed to selecting a woman and his team is considering naming his running mate far ahead of the Democratic National Convention in August. Dodd and Biden served together in the Senate and he endorsed Biden in October days before introducing him at a fundraiser at Gov. Ned Lamont’s Greenwich home. … Sen. Richard Blumenthal is calling on the Trump administration to require all air travelers to wear face masks as a precaution against the spread of COVID-19. Blumenthal and a colleague, Sen. Edward Markey of Massachusetts, sent a letter to Health and Human Services Secretary Alex Azar on the matter Wednesday, a day before three major airlines — Delta, American and United — said they would begin requiring them. The senators said a federal rule was needed because different airlines and different airports had adopted different standards. … Former federal prosecutor David X. Sullvian has emerged as the favorite to get the Republican nomination for Congress in Connecticut’s 5th District. A virtual nominating convention will be held later this month with the winner going on to face Hayes in November. In a news release Thursday, Sullivan said he had received “support of more than two-thirds of all the delegates” to the convention. Hayes, a freshman, is considered the most vulnerable of Connecticut’s five Democratic House members. … The Wallingford Town Council became the latest local governing body to experience “Zoom bombing,” a new form of cyberattack where an individual enters a videoconference they were not invited to with malicious intent. As was the case at Tuesday’s council meeting in Wallingford, the individual often broadcasts graphic sexual content to the others in the meeting. Like most cities and towns, Wallingford has shifted municipal meetings online due to restrictions on gatherings. Vincent Cervoni, chairman of the Wallingford Town Council, said the cyberattack was being reported to the police for investigation.

    Russell Blair can be reached at rblair@courant.Com.`,
    date:new Date('Jul. 28, 2019'),
    image:'images/politics3.jpeg',
    category:'politics',
    views:10
  },
  {
    title:'Day Of Angry Protests, Political Maneuvers Sets Stage For Likely Legal Battle In Michigan',
    author:'Shanai Buck',
    content:`As protesters gathered shoulder-to-shoulder inside and outside the Michigan Capitol on Thursday, the Republican-majority legislature opted not to extend the state’s COVID-19 state of emergency.

    That means legislative approval for the governor’s authority to issue executive orders and marshal resources to respond to the global pandemic expired at 11:59 p.M. April 30. But before that, Gov. Gretchen Whitmer declared the state of emergency wasn’t over, issuing a trio of new executive orders that would extend the state of emergency through May 28.
    
    Whitmer also moved to extend an order banning in-person dining at restaurants and bars and the opening of theaters, gyms, salons, casinos and other businesses through May 28.
    
    So where does that put the state of Michigan, where 41,379 people have had confirmed cases of COVID-19, and 3,789 have died?
    
    The court system will likely have the final say.
    
    Related: Michigan House adjourns without extending coronavirus state of emergency
    
    Both the House and Senate gave its leadership the go-ahead to sue Whitmer if she continues issuing emergency executive orders after April 30.
    
    “If she does not recognize the end of the emergency declaration, we have no other choice but to act for our constituents,” Senate Majority Leader Mike Shirkey, R-Clark Lake, said in a Senate floor speech Thursday evening.
    
    Republicans in both legislative chambers argued Whitmer has gone too far with her emergency authority. Some alluded to Whitmer’s office releasing an email exchange outlining Shirkey’s initial proposal for two one-week emergencies in exchange for requiring the legislature approve any future stay-at-home orders, calling her interactions with the legislature during the COVID-19 outbreak improper.
    
    Related: Gov. Whitmer to legislature: Michigan is still in a state of emergency
    
    Sen. Ken Horn, R-Frankenmuth, said Whitmer has “insulted, demeaned and ignored this legislature.” House Speaker Lee Chatfield, R-Levering, said he still hopes to partner with the governor on COVID-19 response, adding, “I hope for the sake of the people of our entire state that she takes our hand and works with us and builds bridges.”
    
    But legislative Democrats sided with Whitmer, who said the governor needs flexibility to respond to the outbreak as the death toll continues to rise.
    
    “Now is not the time to limit the tools available to our state,” said state Rep. Tyrone Carter, D-Detroit, a coronavirus survivor.
    
    Others criticized the decision to spend money on a lawsuit fighting the governor’s powers during a pandemic, while the state is expecting billions of dollars in tax revenue losses.
    
    “In the middle of a pandemic, are we that petty?” Senate Minority Leader Jim Ananich, D-Flint, said.
    
    Related: Protesters brave the rain to send message to Michigan leaders as coronavirus state of emergency debate rages
    
    In a statement, Whitmer said the crisis isn’t over, regardless of what lawmakers believe.
    
    “By refusing to extend the emergency and disaster declaration, Republican lawmakers are putting their heads in the sand and putting more lives and livelihoods at risk,” she said. "I’m not going to let that happen.”
    
    Whitmer’s office also indicated she would not sign Senate Bill 858, legislation passed along partisan lines in both chambers that laid out extension dates for certain executive orders issued by the governor.
    
    Notably, one of the provisions in the bill would allow restaurants, bars, gyms and other public-facing businesses to open May 15, albeit with some social distancing restrictions.
    
    The bill “does not comply with constitutional requirements” and the governor won’t sign bills that constrain her ability to protect Michigan residents from COVID-19, Whitmer’s office said in a statement.
    
    Throughout the daylong legislative session, several hundred protesters took to the Capitol lawn and the building itself in an ultimately successful effort to convince the legislative majority not to side with Whitmer.
    
    Protesters from all over the state began gathering around 8 a.M. By 10:30, Michigan State Police estimated that between 600 and 700 people were outside the Capitol. Few wore masks. Some carried firearms, others carried flags or signs.
    
    Related: Protesters tell lawmakers ‘vote no’ on extending state of emergency, argue freedoms outweigh coronavirus threat
    
    While many of the protesters voiced support for holding lawmakers accountable, the primary concern was Whitmer’s leadership.
    
    “It’s been a disaster, how she’s handled this crisis,” said Livonia resident Patricia Stephanoff. “It’s basically no consideration whatsoever about using common sense.”
    
    Shortly after speakers wrapped up addressing the crowd from the Capitol steps, protesters piled into the Capitol building, causing a backup in the lobby. A line formed outside the doors as people crowded next to each other, disregarding CDC recommendations that people stand six feet apart.
    
    Protesters were allowed in the Senate gallery, but not the House gallery, where some lawmakers were seated to help maintain social distancing on the floor. The decision to close the House gallery to the public resulted in a confrontation between staff and three protesters s day earlier.
    
    On Thursday, a crowd gathered around the entrance to the House floor - an area that’s always off-limits to the general public - and chanted, “Let us in.”
    
    To abide with executive orders, only 275 people are allowed inside the Capitol building at a time, Michigan State Police Lt. Brian Oleksyk said. Once that numbers was hit, officers enforced the rule and would not allow anyone in until more people left the building.
    
    One arrest had been made as of 2 p.M. After one protester assaulted another, Oleksyk said.
    
    COVID-19 PREVENTION TIPS
    
    In addition to washing hands regularly and not touching your face, officials recommend practicing social distancing, assuming anyone may be carrying the virus.
    
    Health officials say you should be staying at least 6 feet away from others and working from home, if possible.
    
    Carry hand sanitizer with you, and use disinfecting wipes or disinfecting spray cleaners on frequently-touched surfaces in your home (door handles, faucets, countertops) and when you go into places like stores.
    
    Read more Michigan coronavirus coverage here
    
    Showdown brewing between Whitmer, Michigan Republicans over coronavirus state of emergency
    
    Wednesday, April 29: Latest developments on coronavirus in Michigan
    
    Michigan sees 100 more coronavirus deaths, 1,100 new confirmed cases
    
    U.P.’s painful dilemma: Almost no coronavirus now, but at what cost?
    
    Protesters of Michigan’s coronavirus response removed from House gallery
    
    Hospitals can’t deny service based on a person’s ‘worth,’ Whitmer orders
    
    Construction to resume May 7 in Michigan
    
    Henry Ford doctor who nearly died from coronavirus was on ventilator 9 days ago, now he’s home
    
    Note to readers: if you purchase something through one of our affiliate links we may earn a commission.
    
    `,
    date:new Date('Aug. 18, 2019'),
    image:'images/politics4.jpeg',
    category:'politics',
    views:12
  },
  {
    title:'Time For States To Reopen Their Economies? Political Divisions Emerge As Midwest Governors Weigh Coronavirus Cases Vs. Unemployment.',
    author:'Brendon Lancaster',
    content:`As the coronavirus pandemic spreads across America, many of the nation’s governors find themselves in a political vise, squeezed between pressure to reopen local economies amid record unemployment and to keep citizens safe from a highly contagious disease.

    No region in the country has met the public health crisis with a wider range of responses than the Midwest, which is home to large rural swaths with fewer cases of the virus and major cities such as Detroit and Chicago that are among the hardest hit.
    
    As the U.S. Tops 1 million people sickened by the virus and 61,000 deaths, differing statistical curves of COVID-19 cases in the Midwest’s 12 states have driven varying policy prescriptions from the region’s state capitols. So, too, have the political persuasions of the governors — seven of whom are Republicans and five of whom are Democrats.
    
    The divergent approaches across the Midwest have been on full display in recent days as the Democratic governors of states with early statewide stay-at-home orders — Illinois, Michigan and Wisconsin — extended them into May. Meanwhile, Republican governors in four states that never issued such an order — Iowa, Nebraska, South Dakota and North Dakota — have plans for many businesses to operate under new social distancing guidelines.
    
    Urgency to reopen sectors of state economies has ratcheted up as the national economy has cratered under the stay-at-home restrictions in recent weeks, with a staggering 30 million Americans filing for unemployment since mid-March.
    
    The governors have started to enact changes as health experts have warned the Midwest has the nation’s largest share of emerging coronavirus hot spots — most of them in states reopening large sectors of their economies and many tied to meatpacking plants President Donald Trump recently ordered to remain open. All told, cases continue to rise in seven Midwestern states, are relatively flat in three states and have decreased in another two, data shows.
    
    Governors are making decisions on how and when to reopen businesses amid heightened pressure from the political right, as thousands of protesters — many of them organized by Trump supporters — have crowded at state capitols to demand their freedom to return to work. In some states, Republican lawmakers have argued the stay-home orders from Democratic governors are a constitutional overreach and have tried to strip their emergency powers.
    
    In many ways, the swift reopening plans from some GOP governors reflect Trump’s often conflicted response to the pandemic.
    
    The Republican president has expressed an eagerness to reopen the nation’s economy even as most of the nation’s states do not meet the White House’s own criteria to do so. Likewise, some Republican governors are reopening their states even as their COVID-19 cases have yet to peak, let alone meet the federal guideline that they drop for 14 straight days.
    
    Those in favor of a prompt reopening contend keeping businesses closed is economically unsustainable. Those preaching caution warn opening too soon will lead to a surge of new cases and prolong the nation’s economic recovery.
    
    The onus on how to respond to the pandemic largely has been left to the states as Trump has vacillated between deferring to governors to make decisions and blaming them for perceived problems.
    
    “When these men and women ran for governor, they didn’t bargain for this unprecedented pandemic to confront them on their watch,” said Tom Ridge, the former Republican governor of Pennsylvania who served as the first secretary of Homeland Security following 9/11. “They’re governing pretty damn well, especially with adjusting on the fly — and part of their adjustments have been responding to some rhetorical assurances from D.C. That haven’t materialized.”
    
    With commerce and workers frequently crossing state lines, an added emphasis has been placed on regional coordination. So far, that collaboration largely has split along the Mississippi River.
    
    To the East, a bipartisan group of seven governors share data, policies and best practices to balance opening businesses and snuffing out the virus. To the West, at least four GOP governors either rejected invitations or showed no interest in participating in the pact, according to sources in various states familiar with the private talks. Those Republican governors largely coordinate among themselves, the sources confirmed.
    
    In fact, Illinois Gov. J.B. Pritzker has not had a single conversation with Iowa Gov. Kim Reynolds or Missouri Gov. Mike Parson since the pandemic emerged, the state sources confirmed. Pritzker twice has publicly noted their absence in the Midwest collaborative.
    
    “When you look at Iowa and Missouri and places that border Illinois, we don’t want to have done all of our work here and then have cases come across the border because in those states they’re living free and dying,” Pritzker chief of staff Anne Caprara said in an interview. “That’s really not something we embrace.”
    
    A Midwest compact
    
    Pritzker recently joined Republican governors Eric Holcomb of Indiana and Mike DeWine of Ohio along with Democratic governors Tim Walz of Minnesota, Tony Evers of Wisconsin, Gretchen Whitmer of Michigan and Andy Beshear of Kentucky (though not technically a Midwest state) in forming the joint collaborative.
    
    As part of the group, the governors’ chiefs of staff communicate daily. Holcomb, DeWine and Beshear have regular standing phone calls while Pritzker, Whitmer, Evers and Walz communicate often, various state sources said.
    
    The group does not operate in lockstep but has agreed to closely examine four principles when evaluating whether to reopen sectors of the economy: sustained control of new infections and hospitalizations, enhanced testing and tracing, enough health care capacity to handle a resurgence of cases and enacting new social distancing practices for workplaces.
    
    The sharing of ideas has been evident in recent policy rollouts across the states.
    
    When Holcomb was the first of the group to announce allowing elective surgeries to proceed last week, Pritzker and DeWine did so a few days later. When Pritzker reopened state parks, Evers followed suit. And when Walz announced some 100,000 Minnesota workers could return to manufacturing and industrial jobs under new social distancing guidelines, DeWine announced a similar approach as part of his phased-in reopening plan.
    
    In Michigan, Whitmer’s stay-at-home order was among the most stringent in the nation, and she recently allowed construction to resume, which already had been allowed in several other Midwestern states. The same applied to when Pritzker announced retail stores could have curbside pickup, as Indiana already had been permitting the practice.
    
    Michigan, Illinois and Wisconsin largely remain closed for business. Cases in Illinois and Wisconsin continue to climb. In Michigan, one of the nation’s hardest-hit states, cases have peaked and held relatively flat in recent days.
    
    In Minnesota, Walz has allowed the industrial businesses to reopen even as the state’s cases continue to rise, calling the federal requirement that they drop 14 straight days “arbitrary.” Minnesota, he said, has done a better job than most at social distancing. It has one of the lowest per-capita infection rates in the country.
    
    Ohio is one of just two states in the Midwest where cases have peaked and are on the decline. DeWine announced offices and industrial operations can reopen Monday and retail stores can open on May 12, both under social distancing rules and lower capacities. Restaurants will remain closed for dining-in as will other businesses such as barbershops and tattoo parlors.
    
    In Indiana, cases continue to rise statewide and most businesses remain closed. Holcomb is scheduled to unveil his new stay-at-home order for May on Friday and has hinted a phased-in reopening is on the way. “We are not just going to flip a switch,” he said Thursday. “This is going to be very methodical and data driven.”
    
    DeWine and Holcomb have been careful not to criticize Trump, but they also have forged their own more measured approaches to reopening their economies than their other GOP counterparts in the Midwest. Both have more COVID-19 cases than other Republican-run states, although South Dakota, Iowa and Nebraska have similar per capita numbers of cases.
    
    Both DeWine and Holcomb have deep ties to the pre-Trump Republican establishment. DeWine has served as a prosecutor, state senator, state attorney general, congressman and U.S. Senator. Holcomb was a longtime adviser to former Indiana Gov. Mitch Daniels, chairman of the state Republican Party, chief of staff to then-U.S. Sen. Dan Coats and briefly served as lieutenant governor before running to succeed now-Vice President Mike Pence as governor.
    
    Governors who are newer on the political scene are “inclined to respond to the pressure to open their economies up sooner" from Trump and his voters, observed Mark McKinnon, who worked as a campaign strategist on presidential campaigns for former President George W. Bush and the late Sen. John McCain.
    
    “Generally, governors who predate President Trump are more inclined to resist the pressure to open their economies too early," said McKinnon, who is a co-host of “The Circus” on Showtime. “They’d rather be safe than sorry."
    
    A more urgent approach
    
    In Iowa and Missouri, Republican Govs. Reynolds and Parson have taken a more urgent approach to restarting their economies.
    
    A spokesman for Reynolds did not respond to questions about why she declined to join the group of other Midwestern governors. The Iowa governor, however, speaks regularly with fellow Republicans Parson, Nebraska Gov. Pete Ricketts and North Dakota Gov. Doug Burgum on how to handle the pandemic, he said.
    
    For his part, Parson says he never was invited to join the group, but has acknowledged little interest in doing so.
    
    “I talk to governors every day,” Parson said when asked by a local reporter about his lack of a working relationship with Pritzker. “I learned early on I need a model in place for Missouri that deals just with Missouri. I can’t worry so much about what they’re doing."
    
    Parson initially resisted a stay-at-home order before issuing one in early April. On Monday, it will expire and the governor is allowing all businesses to reopen with social distancing. Kansas City and St. Louis can keep more restrictive local orders, but nearby suburban areas are poised to reopen, state officials said.
    
    Statewide, Missouri’s cases appear to have peaked and have held flat in recent days, but health experts have warned of a resurgence in cases if the state reopens too soon. Parson’s office pointed to cases decreasing in every region except St. Louis.
    
    “This recovery plan is responsible, effective, gradual and safe for Missouri,” Parson said.
    
    In Iowa, Reynolds announced that Iowa would reopen stores, gyms, malls, restaurant dining rooms and other businesses on Friday in 77 of the state’s 99 counties as long as social distancing is maintained. The governor said business restrictions would remain in 22 counties with higher case numbers until at least May 15, and gatherings of 10 or more people remain banned statewide.
    
    “This level of mitigation is not sustainable for the long term, and it has unintended consequences for Iowa families,” Reynolds said of the previous restrictions, adding that her objective is to “protect lives and secure livelihoods at the same time.”
    
    Iowa’s case numbers continue to climb statewide and have not met the White House guideline for a 14-day decrease. Reynolds said case numbers in the counties reopening have either “stabilized or we’ve started to see a downward trend over the 14 days.” The governor’s office did not respond to requests for the county-by-county data.
    
    Reynolds made the decision after University of Iowa health experts warned that if she loosened the restrictions the state likely would bear a second wave of cases and deaths, the Des Moines Register reported.
    
    Iowa is home to three of the fastest-growing hot spots in the country, according to a study of case data by the Dartmouth Institute. An outbreak in Sioux City tied to a nearby beef processing plant is the fastest-growing in the nation while hot spots tied to a Waterloo pork plant and in the state capital of Des Moines rank near the top.
    
    Allowing some counties to open while such outbreaks remain nearby is a scattered approach likely to exacerbate the problem, warned Dr. Elliott Fisher, an epidemiologist and a professor who heads up Dartmouth’s project that maps COVID-19 cases and deaths by regional hospital districts.
    
    “The danger of using county-level data is that it can mislead you into thinking the virus isn’t really there, because you can’t really see the patterns,” Fisher said. "When we group the counties together and look at it regionally, we can see the virus is everywhere.”
    
    Asked Wednesday about data showing high-growth pockets in the state, Reynolds defended her county-by-county process, calling it a “reasonable, phased-in approach."
    
    Politics of reopening
    
    Like Iowa, Gov. Ricketts is reopening businesses in regions of Nebraska even as the state’s case numbers climb. Ricketts, a co-owner of the Chicago Cubs, has taken it a few steps further, allowing restaurants, barbershops and tattoo parlors to open.
    
    North Dakota Gov. Burgum allowed all businesses in the state to reopen Friday with social distancing guidelines and reduced capacities. In South Dakota, most businesses were never required to close, as Gov. Kristi Noem emphasized citizens’ economic freedom even as a pork processing plant in Sioux Falls became the largest coronavirus outbreak in the country at the time.
    
    As a result, the state ranks third behind Michigan and Illinois for the most per capita COVID-19 cases in the Midwest. Noem has argued the outbreak would have happened even if the state had a stay-at-home order since it’s an essential business, and said the plant should reopen soon as South Dakota’s cases have decreased.
    
    “I trusted my people,” Noem said during a recent Fox News appearance with Sean Hannity. “They trusted me to make decisions that were best for us.”
    
    Her firm stance has drawn regular praise from conservative commentators such as Hannity and Laura Ingraham, who called Noem “public enemy No. 1 for the liberal media."
    
    Like so many other issues, the debate over how and whether to reopen businesses largely has broken along partisan lines, said University of Chicago political science professor William Howell, who has studied the political response to the pandemic. It’s largely Democrats representing states with urban areas that have been hit the hardest urging the most caution and Republican allies of Trump pushing for the economy to reopen, he said.
    
    “There have been a couple of exceptions, but most Republicans are taking their cues from this president, and they certainly don’t want to cross him,” Howell said. “Whereas there has been much more uniformity on the Democratic sides in taking seriously the views of public health experts.”
    
    The political divide has been particularly bitter in Midwestern states with Democratic governors.
    
    In Kansas, Republican lawmakers revoked Democratic Gov. Laura Kelly’s order that limited church gatherings to 10 people, which the state Supreme Court later overturned. The governor also settled a lawsuit from two rural churches, because she decided to allow the state’s stay-at-home order to expire Monday while enacting a three-phase plan to gradually start reopening businesses.
    
    In Michigan, Republican lawmakers do not support Whitmer’s extension of the state’s stay-at-home order until May 15, refused to pass legislation extending Michigan’s state of emergency and plan to sue in the state Supreme Court to challenge her emergency powers. In Wisconsin, GOP lawmakers have sued Evers over to block his stay-at-home order.
    
    Even in Illinois, the only Midwestern state entirely controlled by Democrats, one Downstate Republican lawmaker won a ruling from a judge who temporarily blocked the governor’s stay-at-home order from applying to him, which Pritzker has appealed. A second GOP lawmaker, the co-chair of Trump’s re-elect campaign in Illinois, has sued alleging Pritzker’s order has created a “police state.”
    
    “I find that this partisanship in the midst of an unprecedented global health crisis is inexcusable and unforgivable," said Ridge, the former Republican Pennsylvania governor and Homeland Security secretary under former President George W. Bush. “If there’s ever been a time in this country where R’s should be talking to D’s and D’s should be talking to R’s to find a common path and common ground, now is that time."
    
    Virtually all of the region’s governors have faced some form of protest — the largest of them in the key presidential swing states of Michigan and Wisconsin where thousands gathered, many of them Trump supporters, to protest the Democratic governors. The president helped fuel the demonstrations, by tweeting that states run by Democrats, including Michigan and Minnesota, should be liberated.
    
    But the Republican governors have faced unrest too.
    
    In Ohio, DeWine condemned a “vile” anti-Semitic sign at a statehouse protest and a GOP state senator’s comparison of steps taken by the state’s health director to those made by Nazis during the Holocaust. And in Indiana, Holcomb criticized 200 protesters who marched outside the governor’s mansion in Indianapolis, many of them not wearing masks or practicing social distancing. He called the gathering a “perfect petri dish for how this can spread” in a city with one-third of the state’s COVID-19 cases.
    
    “We respect everyone’s voice and being able to step forward and be heard," Holcomb said, “but this would be the exact way not to be productive about that.”
    
    In Missouri, Parson is all too familiar with such scrutiny. The governor has been criticized for waiting until April to issue a stay-at-home order and now for allowing it to expire Monday after just three weeks.
    
    Even as he stood outside his wood-paneled office in Jefferson City and announced all businesses in the state would be allowed to reopen the following week, Parson repeatedly was interrupted with heckles.
    
    “Reopen!” a man shouted, his voice echoing off the capitol walls as the governor trudged through his speech. “Reopen now!”`,
    date:new Date('Nov. 24, 2019'),
    image:'images/politics5.jpeg',
    category:'politics',
    views:7
  },
  {
   title:'Senate Democrats Introduce Proposal To Pay Businesses Up To $90K Per Worker',
   author:'Brendon Lancaster',
   content:`A group of Senate Democrats unveiled a proposal Friday for Congress's next coronavirus economic aid package that would compensate businesses for furloughed workers, up to $90,000 per employee. 

   The Paycheck Security Act, written by Sens. Mark WarnerMark Robert WarnerUS intelligence says it's investigating COVID-19's origins Hillicon Valley: Privacy hawks monitor contact tracing projects | Strike planned at Amazon, grocery delivery companies | Lyft cutting nearly 1K workers Senate panel plans hearing next week for Trump's intel chief pick MORE (D-Va.), Bernie SandersBernie SandersThe Hill's Campaign Report: Pressure grows on Biden to address Tara Reade allegations To energize young voters, Biden must recapture spirit of 2008 campaign Ex-Sanders aide criticizes Super PAC formed by senator's former staffers MORE (I-Vt.), Doug Jones (D-Ala.) and Richard Blumenthal (D-Conn.), would give grants to businesses that had experienced at least a 20 percent drop in revenue to help cover employee wages and benefits for a minimum of the next six months.
   
   “The health and economic crisis brought on by COVID-19 is unprecedented in American history," Warner said when the proposal was first announced two weeks ago. "While Congress quickly took some steps with the PPP program and expanding access to disaster relief loans, these early lifelines will not be enough on their own to prevent more job losses and alleviate the economic uncertainty."
   
   ADVERTISEMENT
   
   The proposed legislation would give businesses grants that would cover "salaries and wages up to $90,000 for each furloughed or laid off employee, plus benefits, as well as up to an additional 20 percent of revenues to cover fixed operating costs such as rent, utilities, insurance policies, and maintenance."
   
   Businesses that have received a Paycheck Protection Program (PPP) loan or an Economic Injury Disaster Loan wouldn't be eligible for the grants "unless they exhaust these other programs or use the Payroll Security Program grant to pay back their existing loans," according to a statement from Warner's office.
   
   This week, 3.8 million more Americans filed for unemployment benefits despite multiple states partially reopening their economies. Over the last six weeks, more than 30 million Americans have filed for unemployment and projections show that the number could continue to grow, potentially breaking the 25 percent unemployment rate record that was set during the Great Depression.`,
   date: new Date('Mar. 15, 2020'),
   image:'images/economy1.jpeg',
   category:'economy',
   views:20 
  },
  {
   title:'Houston’s Businesses Tentatively Re-open As Stay-at-home Order Expires',
   author:'Jozef Floyd',
   content:`Arrows on the floor show customers which way to walk. Sanitizing stations appear on the walls. Signs advise shoppers to wash their hands.

   On the first day that Texas’ stay-at-home order expired and non-essential retailers were allowed to reopen under social distancing protocols, customers, business owners and employees alike braved a new world together — six feet apart and at 25 percent capacity.
   
   Most of Houston’s Galleria Mall, a massive up-scale mall that typically attracts 30 million visitors a year, stood empty. The majority of the mall’s 400 storefronts kept doors locked. Tables and chairs in the food court are missing, since only to-go orders are allowed. Kiosks that normally sell jewelry, perfume and gifts are draped with black cloths.
   
   But lights flickered from some retailers, where masked workers stood anxious as the clock neared 11 a.M., when they would open their doors. Employees went about their business in the minutes leading up to the reopening; at ba$sh, a women’s clothing retailer, workers prepared the store with new inventory, pulling a rolling rack of flower-print dresses for display. Then, a handful of customers began to trickle in.
   
   Mall general manager Kurt Webb said many tenants are anxious to get back to business, but he’s not expecting them to do so all at once.
   
   “Early on, we’re OK with that,” he said. “We want to make sure we’re giving everyone enough space and earning people’s confidence that malls are a place the community can come and feel safe.”
   
   Extra masks and sanitizing wipes are available for shoppers on the mall’s third floor office. But earning consumer confidence back will be a tough sell, particularly in malls. Only about a third of U.S. Consumers feel safe going to the store right now, according to a Deloitte survey of consumer behavior.
   
   Still, despite the unprecedented mass closure of schools, offices and retailers by global pandemic,some customers have still not altered shopping habits. Cory Andrews, of The Woodlands, said he doesn’t like online shopping, so he drove to the Galleria on the first day it re-opened on the hunt for Dior cologne and Gucci socks.
   
   “Nothing’s open in The Woodlands,” he said.
   
   Fuel to the fire?
   Labor advocates and pro-business groups alike largely advised against the re-opening.
   
   The Greater Houston Partnership, a business-financed economic development group, discouraged Houston companies from returning to the office if possible on the first day that the stay-at-home order had expired in Texas. Bob Harvey, the CEO of the GHP, said in a statement that office-based employees have been able to carry out tasks remotely for some time, and there is, “no need to add fuel to the fire,” when it comes to COVID-19 transmission.
   
   Texas AFL-CIO President Rick Levy criticized the opening as a “premature green light,” if the state does not allow employees to refuse work if their employer does not meet safety standards in the pandemic.
   
   Corporate caution
   Corporations with office employees appear to be remaining quite cautious. ConocoPhillips is implementing a three-phased approach to re-opening its Houston corporate offices, but it won’t commence until May 11, when during the first phase, building occupancy will be limited to 25 percent and employees will be able to voluntarily return.
   
   “There’s no one-size-fits-all way to to do this,” said John Roper, spokesperson for ConocoPhillips. “Some workers are eager to get back to the office, and they are welcome to come in starting May 11. Others will prefer to wait for a later date and that’s completely acceptable.”`,
   date:new Date('May 3, 2019'),
   image:'images/economy2.jpeg',
   category:'economy',
   views:27 
  },
  {
   title:'Connecticut Politics Week In Review: Some Businesses Can Begin Reopening May 20 Under Gov. Ned Lamont’s Four-phase Plan',
   author:'Lucia Mullen',
   content:`COVID-19 hospitalizations have been on the decline for more than a week, prompting Gov. Ned Lamont to give his first glimpse of a vision for reopen businesses and restarting Connecticut’s economy. The short version? It will be a step-by-step process driven by public health considerations. That process begins May 20 but will extend into next year. And things that have become our new normal – like face masks and social distancing – aren’t going away anytime soon.

   Some businesses can begin reopening May 20: Lamont’s reopening task force has recommended certain businesses that can reopen starting May 20 with safety precautions in place, like requirements to wear masks and limit capacity. Restaurants, for example, would be allowed to open for outdoor dining. Bars would remain closed. Offices could begin to reopen, but workers who can telecommute are encouraged to do so. Also slated for reopening on May 20 are nonessential retail businesses that have been closed since mid-March. Nail and hair salons could also begin to operate with restrictions in place. Those businesses would be among the first phase of a four-phase reopening plan that calls for a gradual loosening of restrictions. Lamont said he planned to release more information about whether schools would be canceled beyond May 20 and guidance on social gatherings this coming week. Indra Nooyi, the former PepsiCo CEO who is co-chair of the advisory group, said there would be at least four weeks and likely more between each stage of the reopening plan. It is unlikely that large gatherings, like a Hartford Yard Goats baseball game, will be allowed this year, Lamont said. The types of businesses that would be allowed to reopen May 20 represent about 30% of the more than 430,000 unemployment claims filed since mid-March, though it’s unclear how many of those people would return to work as businesses operate with the new restrictions in place and some customers may remain hesitant to return.
   
   State projects fiscal impact of COVID-19: Connecticut is facing a deficit approaching $1 billion in the current fiscal year that ends June 30 and a budget gap estimated at $2.3 billion in the following year as coronavirus-related shutdowns decimate the state’s economy and send tax revenue plunging downward. “COVID has been tough on our physical health, it’s been tough on our mental health and it’s been tough on our fiscal health,” Lamont said Friday. Fiscal analysts have projected a decline of more than $1 billion in sales taxes alone. State officials said they hope to close those budget gaps through spending cuts and by dipping into the state’s $2.5 billion rainy day fund, avoiding the need for significant tax increases. Lamont also hinted at asking for concessions from state employee unions. The state’s Special Transportation Fund has also taken a fiscal hit as gas tax revenue drops sharply. Its now projected to be insolvent by July 1, 2021.
   
   Towns ease burden with 0% budget increases: Cities and towns across the state have adjusted their municipal budgets to reduce spending and limit tax increases, seeking to ease the burden on taxpayers who may have lost jobs or income due to the coronavirus pandemic. “What we can do is work hard to run our city well, doing the very best we can for our taxpayers and that’s what I believe we have done,” Middletown Mayor Ben Florsheim said in proposing what he said is the city’s first “truly flat budget” in decades. In West Hartford, a $308.7 million annual budget proposed in March was reduced to $299.9 million, reversing a 3.59% tax increase to a 0.14% tax cut. “We are addressing not only the most serious health crisis in our lifetimes, but an economic challenge that soon may also be historic,” said Manchester Mayor Jay Moran. His town also adopted a no-tax-hike budget.
   
   ‘Track and trace’ program launching in mid-May: To blunt the potential resurgence of COVID-19 cases as businesses begin reopening and social gatherings resume, Connecticut will launch an extensive contact tracing program to isolate those who become newly infected and make sure those people they have been in contact with get tested themselves. The “track and trace” program, as state officials have referred to it, would rely on public health officials and volunteers as well as technology to reach out to those who test positive for the virus. Participation would be voluntary, and the plan does not involve enforced quarantines of those infected or their close contacts. People's movements would also not be monitored. Those who test positive would receive an automated text message informing them of the results and directing them to a confidential, online questionnaire. Officials hope to get the program up and running in mid-May as expanded testing becomes available.
   
   Hayes quarantining after husband tests positive: U.S. Rep. Jahana Hayes is quarantining at her Wolcott home after her husband Milford, a Waterbury police detective, tested positive for COVID-19. Hayes said in a written statement Thursday that she tested negative for the virus but will remain in her home for two weeks “out of an abundance of caution.” Congress is in recess until at least May 4. “While some are clamoring to return to Washington to conduct in-person business, this test result in my own family has reinforced that we still have a ways to go – and there is still real danger in a premature return to regular order for Congress and the country, without appropriate precautions,” she said. According to GovTrack.Us, more than 50 members of Congress have tested positive for COVID-19 or have quarantined themselves after having contact with someone who had the virus.
   
   First COVID-19 death at state-run psychiatric hospital: The first patient at a state-run psychiatric facility has died of COVID-19, the Department of Mental Health and Addiction Services announced Thursday. The death came at Connecticut Valley Hospital, where as of Thursday 41 patients had tested positive for the virus. It was announced the same day the Connecticut Legal Rights Project filed a federal lawsuit seeking the release of psychiatric patients at CVH and the Whiting Forensic Hospital to protect them from the coronavirus. “The risk of remaining in those units, where there is no change for appropriate social distancing, is you basically are leaving people there to be sitting ducks to catch this virus,” the project’s executive director, Kathy Flaherty, told The Connecticut Mirror. The state says it has taken steps to prevent the spread of COVID-19 in psychiatric facilities including restricting visitors and reducing capacity but advocates like Flaherty say more must be done.
   
   Longtime Ridgefield First Selectman Rudy Marconi has recovered after contracting COVID-19 last month and appeared alongside Lamont Wednesday to share his story. Marconi, 71, said he was never admitted to a hospital but was on oxygen for eight days after contracting the virus in early April. He said his symptoms included aches, chills, pains, sore throat, headache, nausea and diarrhea. Marconi said his experience should be a lesson to others that COVID-19 restrictions should be lifted in a careful manner. “We cannot open too soon, please believe me,” he said. ... Former Connecticut Sen. Chris Dodd has been tapped by Joe Biden’s presidential campaign to help the ex-vice president select a running mate. Biden has committed to selecting a woman and his team is considering naming his running mate far ahead of the Democratic National Convention in August. Dodd and Biden served together in the Senate and he endorsed Biden in October days before introducing him at a fundraiser at Gov. Ned Lamont’s Greenwich home. … Sen. Richard Blumenthal is calling on the Trump administration to require all air travelers to wear face masks as a precaution against the spread of COVID-19. Blumenthal and a colleague, Sen. Edward Markey of Massachusetts, sent a letter to Health and Human Services Secretary Alex Azar on the matter Wednesday, a day before three major airlines — Delta, American and United — said they would begin requiring them. The senators said a federal rule was needed because different airlines and different airports had adopted different standards. … Former federal prosecutor David X. Sullvian has emerged as the favorite to get the Republican nomination for Congress in Connecticut’s 5th District. A virtual nominating convention will be held later this month with the winner going on to face Hayes in November. In a news release Thursday, Sullivan said he had received “support of more than two-thirds of all the delegates” to the convention. Hayes, a freshman, is considered the most vulnerable of Connecticut’s five Democratic House members. … The Wallingford Town Council became the latest local governing body to experience “Zoom bombing,” a new form of cyberattack where an individual enters a videoconference they were not invited to with malicious intent. As was the case at Tuesday’s council meeting in Wallingford, the individual often broadcasts graphic sexual content to the others in the meeting. Like most cities and towns, Wallingford has shifted municipal meetings online due to restrictions on gatherings. Vincent Cervoni, chairman of the Wallingford Town Council, said the cyberattack was being reported to the police for investigation.`,
   date:new Date('Apr. 12, 2020'),
   image:'images/economy3.jpeg',
   category:'economy',
   views:24 
  },
  {
   title:'The Economy Looks Grim And Stocks Look High. Why I’m Not Selling.',
   author:'Eren Sargent',
   content:`Which comes first: The S&P 500 index climbing 16% to hit a new high, or the Commerce Department on July 30 reporting the worst decline in gross domestic product since the Great Depression? Before guessing, consider that the index jumped 30% in less than a month and a half after hitting its March low, despite soaring unemployment.

   The combination of feverish gains and mounting anxiety is making asset allocation a challenge. My portfolio is 60% stock index funds and 40% Alka-Seltzer. I’m not selling the funds, though. Valuations are high, but not a deal breaker. And there’s good news afoot.
   
   Newly identified U.S. Covid-19 cases are in decline. Some states, like Georgia, are beginning to lift their lockdowns. Others, like New York, are making plans to do so as soon as mid-May. This past Wednesday, a federal trial of a Gilead Sciences (ticker: GILD) drug called remdesivir showed that Covid-19 patients recovered after an average of 11 days, versus 15 for a placebo group. There were also fewer deaths on the drug; those numbers were what researchers call statistically insignificant, and what patients call good to know just the same.
   
   Also, the Federal Reserve this past week pledged continued support for the economy. It has already lowered the fed-funds rate to near zero and gotten creative with stimulus—buying junk bonds, for example, which has restored a hankering for risk. Maybe the Fed will buy stocks if the market dives again. Who knows? Maybe it will buy out all of the nation’s garage sales without dickering on price. I already regret getting rid of my Simon and Garfunkel CDs.
   
   Stock prices nonetheless look stretched. The S&P 500 traded recently at 18 times last year’s earnings, and I wouldn’t bet on earnings bouncing back to that level next year. After all, this quarter’s GDP decline looks so grim that forecasters have stopped using decimal places. Morgan Stanley sees a 38% annualized plunge. J.P. Morgan says 40%.
   
   We’ll begin bouncing back in the third quarter, but reopening stores won’t necessarily fill them. The pandemic has made 30 million Americans jobless, and not all will be hired back right away. Over-65s, who are at greatest risk of dying from Covid-19, and thus might stay home for longer, account for 20% of consumer spending.
   
   I needed counseling this past week for my valuation worries, so I called Savita Subramanian, the top U.S. Stock strategist at Bank of America Merrill Lynch. She says there’s little statistical relationship between price/earnings ratios and one- or two-year returns.
   
   P/E ratios are a much stronger predictor of long-term returns than short-term ones, Subramanian says. By her math, today’s prices imply 6% yearly returns for the S&P 500, including dividends, over the next decade. Relative to the 10-year Treasury yield, that’s like winning the lottery and securing a grocery delivery window for two-ply toilet paper on the same day.
   
   What about the observation that just a handful of tech titans have pulled the S&P 500 higher? Some strategists call such narrow advances a bad sign. But historically, some of them have worked out fine, Subramanian says. The recent one reflects decades of tech disruption, and it means the index has become more dominated by secular growth themes like cloud computing than by cyclical industries like energy or mining, she says.
   
   It seems like all the good stuff in the S&P 500 is pricey, and the cheap stuff is unlovable. But Subramanian says now is a fine time for stock pickers. Look to stocks with safe dividends, since yield from bonds will remain scarce, she says. Broadly speaking, she likes big banks, which have low payouts relative to profits, strong balance sheets, and shares that have already priced in the risks of a flat yield curve. She also likes tech companies that have graduated from fast growth to cash return.
   
   My chat made me less worried about stocks, until I remembered that stocks are said to climb a wall of worry, and then I worried that I wasn’t worrying enough. Hopefully stocks can also ski up an avalanche of antacid.
   
   This past week, investors received earnings reports from big tech companies that are weathering the pandemic well, including Microsoft (MSFT) and Amazon.Com (AMZN). I spoke recently with the chiefs of two fast-growing cloud companies that are fitting in just fine in the new work-from-home economy: Okta (OKTA) and Slack Technologies (WORK). Please don’t confuse Okta with Doc Ock and Slack with Shriek. Those are Spider-Man villains.
   
   Okta, valued at $18 billion, serves as an access point for workers to get to their companies’ cloud applications, including for payroll stuff, expense reports, and online chats with colleagues. Workers like not having to use different logins for each app. Tech departments like apps organized on a single platform, and that the login uses extra security. CEO Todd McKinnon tells me that Covid-19 has hastened an inevitable shift toward tech making work more flexible. He says only 10% to 15% of enterprise software has migrated to the cloud, providing Okta with a long runway for growth.
   
   Slack is an alternative to workplace email. Chats are organized into channels based on departments, processes, events—whatever. CEO Stewart Butterfield calls email “inherently individual-first,” whereas Slack channels “put the organization or the team first.”
   
   Butterfield, too, sees quarantining speeding up digital adoption, and making Slack more valuable. His vision for Slack involves the words “massive” and “independent.” He says he has 110,000 paid customers now, but that there are 2.5 million businesses in the U.S. Alone with five or more workers. That’s a lot of email to replace.
   
   Both companies collect subscription revenue. Okta generates a trickle of free cash, and Slack is expected to begin doing so inside of two years. Long-term estimates for both have free cash flow swelling quickly. Over the same period, forecasts show my email inbox and password collection collapsing into a restructuring.
   
   Write to Jack Hough at jack.Hough@barrons.Com. Follow him on Twitter and subscribe to his Barron’s Streetwise podcast.
   
   `,
   date:new Date('Mar. 15, 2020'),
   image:'images/economy4.jpeg',
   category:'economy',
   views:23 
  },
  {
   title:'Fed Officials Stress They May Have To Get Innovative To Revive Economy From COVID-19 Shutdown',
   author:'Conner Humphrey',
   content:`Federal Reserve officials on Friday stressed they were thinking about more and innovative ways to help the economy and not about pulling back support.

   “The Fed is going to need to more in terms of other actions to bridge this period” of sharp downturn and slow recovery, said Dallas Fed President Robert Kaplan, in an interview on the Fox Business Network.
   
   Later, St. Louis Fed President James Bullard told the Wall Street Journal the central bank would be offering support to the economy as long as needed.
   
   And Richmond Fed President Thomas Barkin said the Fed had more work to do to help the economy recover, in a speech delivered from his home office to the Maryland Chamber of Commerce.
   
   The comments largely echo the concern about the economic outlook beyond short-term concerns expressed by Fed Chairman Jerome Powell on Wednesday.
   
   Read: Fed chief Powell says Congress and central bank will likely have to spend more to ensure robust recovery
   
   Powell said the central bank was worried the coronavirus shutdown was creating difficulties that would last over “the medium term,” in other words, two or three years.
   
   There is risk of “damage to the productive capacity of the economy,” the Fed chairman said.
   
   On Wednesday, the Fed kept its benchmark rate at zero and said it planned to continue its “open-ended” purchases of Treasury and mortgage-backed securities. The central bank has also set up $2 trillion in loan programs to keep financial markets from collapsing.
   
   The speed and scope of Fed actions have been much faster than during the 2008 financial crisis and the central bank is also signaled it will buy riskier assets.
   
   Barkin said economic growth came so swiftly after the crisis that it was like riding an elevator in a high-rise. Unfortunately, the economy has to take the stairs back up, he said.
   
   In his Fox Business interview, Kaplan said he thought there would be a need for stimulus to get the economy going but that it would likely have to come from Congress and the White House.
   
   Kaplan said the U.S. Unemployment rate would end the year in a range of 8%-10%. And growth for the year would shrink by 5% even with an expected recovery in the second half of the year.
   
   U.S. Equity benchmarks were sharply lower on Friday, in part reflecting weak U.S. Data and also tension between the White House and China. The Dow Jones Industrial Average DJIA, -2.55% was down 644 points, or 2.6% to 23,698 in midafternoon trading.`,
   date:new Date('Oct. 4, 2019'),
   image:'images/economy5.jpeg',
   category:'economy',
   views:30 
  },
  {
    title:"NASCAR’s Plan For 7 Races In 11 Days Is A Glimpse At What’s To Come In Sports",
    author:"Donovan Merritt",
    content:`For a brief moment, as NASCAR announced its imminent, flurried and action-laden restart on Thursday, it seemed like it might be overdoing it.

    Seven races in 11 days, beginning on May 17, four of them in the Cup Series. Too much of a good thing, perhaps?
    
    Nope, not even close.
    
    Article continues below ...
    10 days. 7 races. Darlington and Charlotte.
    
    NASCAR #RaceHub breaks down Thursday's announcement that racing WILL return in just over two weeks. Pic.Twitter.Com/5z3yNeQiX1
    
    — FOX: NASCAR (@NASCARONFOX) April 30, 2020
    
    As sports takes its tentative initial steps back towards active competition, the concept of too much no longer exists. We have been without sports, essentially, for nearly eight weeks, a barren period in athletics of unparalleled precedent.
    
    It is time to play catch up, and while NASCAR is leading the opening surge with Cup doubleheaders at Darlington Raceway and Charlotte Motor Speedway, it won’t be alone.
    
    When sports gets back into full flow, the appetite will be like nothing we have seen before. We are hungry already, as evidenced by the swell of interest in not just the NFL Draft but every minute part of it, from office décor to family dogs to Roger Goodell’s attire.
    
    And by the fact that the few remaining things to watch, like Nicaraguan soccer and Taiwanese baseball and yes, even marble racing, have never had so many viewers.
    
    Congratulations to your #Marbula1 season one champions, @SpeedersSavage! Shout-out to your runner ups in the team championship, @RealHazers and @RealOrangers! Congratulations to Speedy on winning the racer championship, and shout-out to runner ups, Snowy and Smoggy! #SpeedIsKey pic.Twitter.Com/HaKEGMHiIR
    
    — Marbula 1 (@MarbulaOne) April 5, 2020
    
    We like to see competition, and athletes crave to compete, which is why in NASCAR, even the virtual series of races was treated with utmost seriousness, barring a couple of unfortunate interruptions.
    
    Truly though, we are ready for the real thing. And we are going to get a lot of it.
    
    Forget for a while all of the traditions and customs of the sporting calendar that you have grown up with. It is going to be different.
    
    With appropriate deference to the progression of the coronavirus and whatever restrictive measures remain, the strong likelihood is that the back end of this year could become extraordinarily laden with sports activity.
    
    NASCAR is going to try to complete all 36 Cup series races, despite having lost two months to the shutdown. The Ultimate Fighting Championship has been battling to put on events throughout, and finally looks set to get one off the ground, with UFC 249 due to be held in Jacksonville next weekend. Not content with that, UFC president Dana White is planning on an opening burst of three events in a week and expects to roll out more shows with increased regularity.
    
    WHAT A CARD! 👏 #UFC249 pic.Twitter.Com/JRNGc2hjm3
    
    — UFC (@ufc) April 24, 2020
    
    In boxing, the barren calendar has left a number of intriguing fights waiting to be made and an appetite to schedule the biggest ones possible. Tyson Fury v. Anthony Joshua, a heavyweight scrap that would be a true blockbuster, is now reportedly in talks.
    
    If and when the NBA returns, while concessions will be made for player health, don’t expect to see too many rest days. Major League Baseball remains in flux, but virtually every viable solution that has been mentioned in the media has involved the use of double-headers to make up for lost time.
    
    In the closing months of this wild and tumultuous 2020, when the NFL is hopefully back underway, there will also be other events sandwiched in that typically take place at other times.
    
    The French Open tennis tournament moved itself to September and October from its usual slot in the spring. Organizers of the Masters are seeking to stage golf’s grandest spectacle in mid-November.
    
    Quiet scenes from Augusta as the world of golf awaits November 9 – 15, the intended dates for the 2020 Masters.
    
    Photo Gallery: https://t.Co/Wse9bIrI33 pic.Twitter.Com/VCKAzy0ZJS
    
    — The Masters (@TheMasters) April 6, 2020
    
    There are going to be some packed weekends. Just when we are going to be wanting to get out of the house again, there will be all kinds of reasons to plunk ourselves in front of the television.
    
    We are going to be busy. Sports was taken from us for all this time. Now, as administrators try to achieve the combined goals of restoring revenue and providing national entertainment, we are going to be bombarded with it.
    
    There will be conflicts of timing, the need to channel surf at great speed and the real possibility that if we’re not careful, the whole day could go by and we’re still there, on the couch. Sports overload on a grand scale.
    
    Here’s hoping.
    
    `,
    date:new Date("Mar. 18, 2020"),
    image:"images/sport1.jpeg",
    category:"sports",
    views:13
  },
  {
    title:"Inside Fantasy Sports: The Fantasy Baseball Dilemma",
    author:"Ace Samuels",
    content:`Today on Inside Fantasy Sports, we take a look at fantasy baseball and where the hobby stands with the season indefinitely delayed. In mid-March, when the sports world came to a stop, most fantasy baseball players were either getting ready for their drafts or already had them. 

    Well now, about two months later, many of them that have already drafted think they should be given the option to re-draft their teams since things have changed. Earlier this week, there were rumors of a planned division realignment. If these plans go through, that would change the way many fantasy baseball enthusiasts would have drafted their teams. For example, the proposed MLB West division would include: Los Angeles Dodgers, Oakland Athletics, San Francisco Giants, San Diego Padres, Arizona Diamondbacks, Seattle Mariners, Texas Rangers, Colorado Rockies, Houston Astros, and Los Angeles Angels. Each team would only play each other within the division.
    
    A trained fantasy baseball mind would look at this division and immediately point out ballpark factors, such as 6 of these 10 teams play in pitcher-friendly ballparks. This would cause the hitters on the Rockies to play in unfavorable fantasy situations and drive their value down. 
    
    Another change would be the designated hitter rule. Since there is no American or National League in this plan, the whole league would have to take on the DH rule. When it comes to young pitchers, many organizations like to set an innings limit. In a shortened season, those limits would go away and those players would be more valuable to fantasy baseball owners.
    
    I have not played in a fantasy baseball league in years, so I reached out to some high-stakes players. Most of them were in agreement that there should not be a re-draft of high-stakes teams. Still, they also said the pandemic and uncertainty is causing them to play in fewer leagues and not take on a heavy financial risk. When it comes to regular home leagues, most commissioners are using a democratic approach and allowing league managers to vote on whether or not to draft again before the start of the season. In the end, fantasy sports are about strategizing your way to victory. A repurposed new format could help savvy owners do just that. 
    
    `,
    date:new Date("Dec. 4, 2019"),
    image:"images/sport2.jpeg",
    category:"sports",
    views:14
  },
  {
    title:"Royals Take The Crown In May On FOX Sports Kansas City",
    author:"Emanuel O'Neill",
    content:`KANSAS CITY, Mo. (May 1, 2020) – FOX Sports Kansas City will re-air the Royals’ 2015 championship run over the next three weeks. It starts Monday, May 4, with Game 2 of the ALDS vs. Houston. Game 4, featuring the Royals’ massive eighth-inning comeback, airs Tuesday. The decisive Game 5

    KANSAS CITY, Mo. (May 1, 2020) – FOX Sports Kansas City will re-air the Royals’ 2015 championship run over the next three weeks.
    
    It starts Monday, May 4, with Game 2 of the ALDS vs. Houston. Game 4, featuring the Royals’ massive eighth-inning comeback, airs Tuesday. The decisive Game 5 from Kauffman Stadium follows on Wednesday.
    
    The Royals’ four ALCS wins vs. Toronto air the following week, on May 11, 12, 13 and 15. The 2015 World Series – Games 1, 2, 4 and 5 – are scheduled for the week of May 18.
    
    All games air at 7 p.M., and are the original national network telecasts.
    
    These Royals Classics can be seen on FOX Sports Kansas City and FOX Sports Midwest or FOX Sports Midwest Plus in the Royals TV footprint. They’ll also be streamed on the FOX Sports GO app and at FOXSportsGO.Com.`,
    date:new Date("Sep. 21, 2019"),
    image:"images/sport3.jpeg",
    category:"sports",
    views:26
  },
  {
    title:"Will New N.C.A.A. Rules Really Keep Agents and Boosters at Bay?",
    author:"Adaline Bowman",
    content:`The world of college sports was rocked nearly 30 years ago when a Las Vegas newspaper published a photograph of three U.N.L.V. basketball players casually drinking beer in a hot tub with Richard Perry, a man nicknamed the Fixer who was known for rigging horse races and basketball games.

    Though the players admitted only to accepting money from Perry, and gambling charges were never brought, the scandal provoked by that photograph — published in The Las Vegas Review-Journal a little more than a month after the unbeaten Rebels lost to Duke in the Final Four — accomplished what an armada of N.C.A.A. investigators could not. It ushered Coach Jerry Tarkanian out the door.
    
    After the N.C.A.A. laid out plans this week for allowing athletes to cash in on the use of their names, images and likenesses, that long-ago photo might be viewed through a contemporary prism as a simple branding exercise — an embodiment of college basketball’s first bad-boy team.
    
    If a photograph like that surfaced now, it would almost certainly not be published in a newspaper, but on a player’s Instagram feed. And perhaps instead of empty Miller High Life cans, champagne flutes or something more carefully curated would be visible.
    
    One of the more intriguing aspects of the N.C.A.A.’s move toward lifting the lid off income opportunities for athletes is that it will require the association to gingerly welcome boosters and agents into a world where they have largely operated in the shadows — if only to avoid brazenly flouting the amateurism edicts of college sports, a billion-dollar industry whose bedrock is an unpaid labor force. 
    
    If the N.C.A.A is to allow athletes to cash in on their fame, how can it not permit them to hire agents and advisers to guide them along the way? And while it may now allow a booster with, say, a car dealership to use the star running back or point guard as the centerpiece of a marketing campaign, how can the N.C.A.A. police whether that offer was made improperly during recruiting? Determining what constitutes fair market value in the world of social media influencing, versus a bribe to attend a particular college, will also be cloudy.

    As suggested in the 31-page report on the topic that the N.C.A.A. released on Wednesday, the Division I, II and III committees that are charged with developing rules from the report’s guidelines “will be in uncharted territory.”

    In more colloquial terms, the N.C.A.A. is allowing what it has long viewed as a fox into its henhouse, and then asking committees to develop rules — or “guardrails” in the association’s jargon — to keep the chickens safe.

    “Among the complex issues that must be addressed is the role ‘advisers’ will have in guiding student-athletes and the process for certifying and regulating these advisers,” the Southeastern Conference said in a statement.

    And despite its notorious history of paying to procure players, the conference also rather richly stressed the importance of creating rules that “will, to the extent possible, deter boosters from directly or indirectly paying student-athletes.”

    One likely outcome is even more beefed-up compliance staffs at universities. (Ohio State, to pick one of the more well-heeled, already has 14 employees in that department.)

    Val Ackerman, the Big East Commissioner who co-chaired the committee that wrote the report, noted that one possibility would be to create a clearinghouse where athletes would be required to file how much they were being paid, who was paying them and what for. There would then be a database that could be monitored.

    “The sunshine is the transparency,” Ackerman said.

    Of course, there can only be so much sunshine when there are restrictions — or guardrails — in place. In professional sports, the money changes hands above the table. In college, it has simply been handed under the table. When athletes reach the N.F.L. and the N.B.A., the hypocrisy of college sports becomes far clearer to many of them.

    That is why Odell Beckham Jr., the star N.F.L. receiver, felt no compunction about handing wads of cash to Louisiana State players on the field after his alma mater won the national football championship in January.

    Beckham was only more brazen than Sam Gilbert, a shadowy booster who helped fuel U.C.L.A’s basketball dynasty under Coach John Wooden. A Los Angeles Times investigation once called Gilbert “a one-man clearinghouse,” who helped U.C.L.A. players get cars, clothes, airline tickets and scalper’s prices for season tickets. Beckham’s motives were only purer than those of Nevin Shapiro, a convicted Ponzi-schemer who said he had lavished money, cars, yacht trips, jewelry, televisions and other gifts on Miami football players.

    It is no small irony that two people at the forefront of loosening the N.C.A.A.’s grip on athletes cashing in on their fame are Ohio State’s president, Michael Drake, and its athletic director, Gene Smith.

    Smith led the department a decade ago when five football players — including the star quarterback Terrelle Pryor — were suspended after trading memorabilia for cash and tattoos. The case set off such a furor that the team’s football coach, Jim Tressel, resigned.

    And yet, such an arrangement is likely to be within the rules sometime next year.

    In fact, it is easy to imagine in the not-too-distant future a few teammates getting together at a friend-of-the-program’s house for a proposal. Soon, they’re in the hot tub with drinks in hand, smiling for the camera — and listening to an offer they can’t refuse.
`,
    date: new Date("May 14, 2019"),
    image:"images/sport4.jpeg",
    category:"sports",
    views:30
  },
  {
    title:"Tennis Coming Back Slowly With Exhibition Matches",
    author:"Darci Robins",
    content:`Tennys Sandgren, who was on a roll before professional tennis shut down, has had enough of video games and self-isolation in his home near Nashville, Tenn.

    “I’d play tennis in a hazmat suit, just to go compete. I’m itching,” he said on Wednesday night.
    
    Such extreme measures will not be necessary, just a 12-hour road trip next week. Sandgren plans to drive to West Palm Beach, Fla., to play in the UTR Pro Match Series, the first top-tier tennis exhibition in the age of the coronavirus, and hardly the last.
    
    Sandgren, an American who had seven match points in the quarterfinals of the Australian Open in January before losing to Roger Federer, is set to play May 8-10 against Matteo Berrettini of Italy and the rising Americans Reilly Opelka and Tommy Paul.
    
    Berrettini, ranked eighth, was a surprise semifinalist at last year’s United States Open. Opelka is ranked 39th, Sandgren 55th and Paul 57th.
    
    The matches, to be played on a private hardcourt and broadcast on Tennis Channel, will be singles only, with no live spectators and just one match official to respect social-distancing requirements.
    
    “We’re trying to bring pro tennis back on linear TV, and we’re doing it in a way that is super safe,” said Mark Leschly, the chairman and chief executive of Universal Tennis, the tennis rating and organizational platform that is backing the event with Tennis Channel.
    
    It is part of a wave of competitions that are trying to fill some of the void created by absence of the professional tours, the ATP and the WTA, which have shut down for at least four months because of the pandemic.
    
    The International Tennis Series, a package of men’s round-robin events primarily involving players ranked well outside the top 100, has been streaming on ESPN3 since mid-April from another private Florida court. Most of the matches have been streamed with a single fixed camera and without commentary, as passing traffic and the players’ mutterings provide most of the soundtrack.

    Dustin Brown, a flashy German pro who once upset Rafael Nadal at Wimbledon but has slipped to No. 239 in the rankings, will take part this weekend — with a group of lower-ranked players — in the first of a series of German exhibition events at a club in the town of Höhr-Grenzhausen.

    Patrick Mouratoglou, the  Frenchman who coaches Serena Williams, announced a series of events called the Ultimate Tennis Showdown that would begin later in Mayat his tennis academy near Nice. Mouratoglou said that 10th-ranked David Goffin had committed to the first event along with Alexei Popyrin, a promising Australian who is ranked 103rd and whose father initially had the idea for the series. It is being designed to appeal to a younger audience with in-match coaching and fewer restrictions on player behavior than at tour events.
    
    On a small scale, the risks are minimal. There is little chance of direct or close body contact when two singles players face each other. Handshakes can be nixed, and players can change ends on opposite sides of the court. During the exhibitions, each player also uses a different set of balls while serving to reduce — though not eliminate — the risk of contamination from both players handling the same ball.

    “You can control the settings a lot more,” Sandgren said. “There’s way less players and way less extra stuff going on, so you can take more extensive precautions.”

    Both the WTA and ATP Tours will not resume regular tournament play until July 13 at the earliest, although the rest of the 2020 season remains in doubt, including the U.S. Open, scheduled for Aug. 31 to Sept. 13.

    Andrea Gaudenzi, the ATP chairman, said last week that a decision would be made about the remaining July tour events by May 15 and about the August events by June 1. Mike Dowse, the chief executive of the United States Tennis Association, has said he expects the association to decide sometime in June whether to proceed with the Open.

    Dowse said that holding the U.S. Open without spectators would be an option, though not appealing for the atmosphere or the ticket and luxury-box revenue. But the mushrooming exhibition circuit certainly presents an opportunity for everyone in the game to see how tournaments could work.

    “The world has changed, and we must adapt and innovate,” Leschly said. “Local, individual and small group play will be the new normal for the foreseeable future.”

    Players will call their own lines at the UTR events, with the chair umpire having the right to overrule. The court will be disinfected between matches. Though no ATP points are available, the results will count toward players’ Universal Tennis Rating, a system that has fast become a point of reference at the junior and collegiate level and is being incorporated into some coverage of the professional game, in part because Tennis Channel is a commercial partner with UTR.

    The modest prize money and, in some cases, appearance fees on offer are also a chance to earn for out-of-work players, particularly lower-ranked ones.

    “It’s nothing big, four figures worth of prize money total for the day,” said Harry Cicma, the promoter of the International Tennis Series, which features four players in round-robin play at a time. “But it’s not bad considering we’re going every day for four months.”

    With tennis concerned about participation rates and an aging audience, the new events are a chance to get live competition back on screens ahead of other sports. The events do create concerns about integrity, however. It is possible to gamble on most of these matches. Though these are not official tour events, ATP-level players who take part, like Berrettini and Sandgren, are still under the jurisdiction of the Tennis Integrity Unit, which investigates match-fixing and betting-related corruption.

    In a message sent to players, coaches and agents on April 15, the ATP warned that there “may be an elevated risk of corruption and corrupt approaches in some of these environments.” The message also reminded players that they may not be employed or sponsored by a betting company.

    “They will still be subject to anti-corruption rules, and the T.I.U. has issued guidance to players in this respect,” Mark Harrison, a spokesman for the integrity unit, said on Thursday. “It is vital that as these new events begin to appear, they regard integrity as a non-negotiable central priority.”

    Some recreational players and many professionals have continued to play on private courts, including Sandgren, who has a backyard hardcourt that he recently refurbished.

    “I normally train at Vanderbilt University, but those courts are shut down,” said Sandgren, who has spent the last several weeks living on his own and even taking an open online neuroscience course from Harvard. The virtual world has its limits, however. Time for some real-world thrills after a long road trip.

    “I like video games, but I’m starting to get tired of it,” Sandgren said. “When we started quarantine, I could play for 10 hours in a row, but now I hit 15 minutes and I’m like, ‘Nope, no dopamine to be had here anymore.’”`,
    date: new Date("Mar. 5, 2020"),
    image:"images/sport5.jpeg",
    category:"sports",
    views:15
  },
  {
    title:"The new normal? US airlines announce requirements for passengers to wear face masks",
    author:"Rubie Walls",
    content:`As travelers begin to return to the country's airports, they'll notice the changes meant to prevent the spread of the coronavirus.

    Wearing face masks will be customary, and even required by most domestic airlines. More airports may use machines to check passengers for fever. Security checkpoints may have plexiglass shields between passengers and screeners.
    
    Only 119,629 travelers passed through airport security checkpoints Wednesday, still a fraction of the 2.25 million who did this time last year. But airports, airlines and federal agencies are taking steps to make it possible for air travel to return to normal levels.
    
    American, United, Delta, Southwest, Alaska, Frontier and JetBlue have all announced passenger mask requirements. 
    
    Beginning Monday, Delta, United and JetBlue will require all passengers to wear face coverings. Delta and JetBlue will make them mandatory from the time they check in through the time they deplane. Delta, which says customers can take them off for meals, will also require them in its Sky Club lounges.
    
    "While we remain committed to our new standard of clean and to providing more space for our customers when they travel, we take seriously the CDC guidelines for adding this extra layer of protection," said Bill Lentsch, Delta's chief customer experience officer. "We believe this change will give customers and employees some additional comfort when traveling with us.''

    United said it would provide the required face coverings to passengers starting Monday.

    Delta and United flight attendants are already wearing masks; JetBlue's are now required to do so. United's new policy will also make masks compulsory for other front-line employees such as pilots, customer service agents and ramp workers. Employees using their flight benefits will also have to wear them.

    Ask the Captain: When will air travel return to normal? 

    'The new flying etiquette': JetBlue becomes first U.S. airline to make flyers wear face masks


    "Wearing a face covering isn’t about protecting yourself it’s about protecting those around you,” said Joanna Geraghty, JetBlue's president and operating chief, in a statement. “This is the new flying etiquette."

    Starting May 11, American, Southwest and Alaska will also begin requiring their passengers to wear face masks.

    "We will roll this out as quickly as possible and these kits will be widely available across our network in the coming weeks," said Kurt Stache, American's senior vice president of customer experience. "In the meantime, customers should bring their own masks or face coverings."

    Masks will be mandatory for American's flight attendants beginning Friday. At that time, the airline will also begin distributing masks, sanitizing gel and disinfectant wipes to passengers.

    Southwest said that it will provide masks if customers forget to bring their own.  The Dallas-based airline will mandate masks for employees beginning Sunday.

    Alaska Airlines and Horizon Air, a regional carrier, expect passengers to bring masks themselves and keep them on while at the airport and during the flight. Masks will be available to those who forget.


    Alaska will also provide disposable surgical and reusable fabric masks for employees, many of whom are required to wear masks beginning Monday, and has added social distancing floor decals at airports.

    Starting May 8, Frontier Airlines will require its passengers to wear face masks that cover their noses and mouths "throughout their journey," the airline said in a statement, adding that its flight crews and airport workers are already doing so. "This will include all ticket counters, gate areas, and onboard our aircraft."

    Legislators, unions call to make masks compulsory
    Leading lawmakers and union leaders want all airlines to require passengers and crew members to wear face masks. On Wednesday, Rep. Peter DeFazio,  D-Ore., the chairman of the House Transportation and Infrastructure Committee, asked the Federal Aviation Administration to require them for both groups. 

    Last week, Sara Nelson, the international president of the Association of Flight Attendants-CWA, asked the federal government to provide passengers with disposable paper or cloths masks.

    "These should be provided free to all members of the public entering airport buildings with the stipulation that they be worn at all times on airport property and on airplanes," she said in a letter to Transportation Secretary Elaine Chao and Health and Human Services Secretary Alex Azar.

    Meanwhile, the Transportation Security Administration is installing plexiglass shields at airport security checkpoints to protect its officers. More than 500 TSA employees have tested positive for the coronavirus, and five have died.

    The TSA has also begun installing sneeze guards at the entrance to security checkpoints where officers check travelers' documents. They're already in place at New York's JFK International Airport and Boston's Logan International.

    Coronavirus keeps hitting the TSA: Fifth officer dies of the coronavirus as 505 workers have tested positive

    More airports may require temperature checks. Paine Field, a small commercial airport in Everett, Washington, north of Seattle, said Wednesday that all passengers would be screened for fever by a thermal camera. Passengers whose temperature registers above 99.5 F will undergo a secondary screening and may be prevented from traveling.

    Contributing: Dawn Gilbertson, David Oliver

    Delta and United flight attendants are already wearing masks; JetBlue's are now required to do so. United's new policy will also make masks compulsory for other front-line employees such as pilots, customer service agents and ramp workers. Employees using their flight benefits will also have to wear them.`,
    date:new Date("Jan. 20, 2020"),
    image:"images/travel1.jpeg",
    category:"travel",
    views:13
  },
  {
    title:"The new normal? US airlines announce requirements for passengers to wear face masks",
    author:"Indiana Payne",
    content:`As travelers begin to return to the country's airports, they'll notice the changes meant to prevent the spread of the coronavirus.

    Wearing face masks will be customary, and even required by most domestic airlines. More airports may use machines to check passengers for fever. Security checkpoints may have plexiglass shields between passengers and screeners.
    
    Only 119,629 travelers passed through airport security checkpoints Wednesday, still a fraction of the 2.25 million who did this time last year. But airports, airlines and federal agencies are taking steps to make it possible for air travel to return to normal levels.
    
    American, United, Delta, Southwest, Alaska, Frontier and JetBlue have all announced passenger mask requirements. 
    
    Beginning Monday, Delta, United and JetBlue will require all passengers to wear face coverings. Delta and JetBlue will make them mandatory from the time they check in through the time they deplane. Delta, which says customers can take them off for meals, will also require them in its Sky Club lounges.
    
    "While we remain committed to our new standard of clean and to providing more space for our customers when they travel, we take seriously the CDC guidelines for adding this extra layer of protection," said Bill Lentsch, Delta's chief customer experience officer. "We believe this change will give customers and employees some additional comfort when traveling with us.''

    United said it would provide the required face coverings to passengers starting Monday.

    Delta and United flight attendants are already wearing masks; JetBlue's are now required to do so. United's new policy will also make masks compulsory for other front-line employees such as pilots, customer service agents and ramp workers. Employees using their flight benefits will also have to wear them.

    Ask the Captain: When will air travel return to normal? 

    'The new flying etiquette': JetBlue becomes first U.S. airline to make flyers wear face masks "Wearing a face covering isn’t about protecting yourself it’s about protecting those around you,” said Joanna Geraghty, JetBlue's president and operating chief, in a statement. “This is the new flying etiquette."

    Starting May 11, American, Southwest and Alaska will also begin requiring their passengers to wear face masks.
    
    "We will roll this out as quickly as possible and these kits will be widely available across our network in the coming weeks," said Kurt Stache, American's senior vice president of customer experience. "In the meantime, customers should bring their own masks or face coverings."
    
    Masks will be mandatory for American's flight attendants beginning Friday. At that time, the airline will also begin distributing masks, sanitizing gel and disinfectant wipes to passengers.
    
    Southwest said that it will provide masks if customers forget to bring their own.  The Dallas-based airline will mandate masks for employees beginning Sunday.
    
    Alaska Airlines and Horizon Air, a regional carrier, expect passengers to bring masks themselves and keep them on while at the airport and during the flight. Masks will be available to those who forget.  
    `,
    date:new Date("Nov. 14, 2019"),
    image:"images/travel2.jpeg",
    category:"travel",
    views:23
  },
  {
    title:"Hotel chains are announcing new cleaning program amid coronavirus. Here's what they look like.",
    author:"Casper Odom",
    content:`Best Western joined the fray of hotel chains updating cleanliness measures due to the new coronavirus.

    In an update to its "I Care Clean" program, the company's rejiggered "We Care Clean" plan includes enhanced sanitization procedures at the front desk and lobby, upgraded grab and go breakfast offerings in most hotels and offered more strict cleaning of public amenities like pools and fitness centers.
    
    The hotel brand is relying on guidance from the Centers for Disease Control and Prevention, the Occupational Safety and Health Administration, the Environmental Protection Agency and Health Canada.
    
    Hyatt announced such cleanliness measures earlier this week, announcing it is relying on medical experts, industry professionals and others to ensure guests feel safe.
    
    "We must critically examine the hotel experience from every vantage point – from our rooms and our lobbies to our spas and dining – bringing in the latest research, technology and innovation to make that happen," Mark Hoplamazian, Hyatt president and CEO, said in a statement.
    
    By September, every Hyatt hotel is expected to have someone trained as a "hygiene manager," who will make sure their hotel adheres to new guidelines.

    These may include social distancing guidelines, prominent hand sanitizer placement, food safety and hygiene protocol implementation for restaurants and room service and increased cleaning frequency with hospital-grade disinfectants on high-touch surfaces, shared spaces and in guest rooms.

    Hyatt has been working with infectious disease and occupational health experts to develop the program. 

    As individual hotel chains, including Hyatt, Hilton and Marriott, announce their cleaning initiatives during the coronavirus pandemic, the industry at large is also working to implement to new standards to make guests feel safe.

    The American Hotel & Lodging Association this week announced "Safe Stay," a program that seeks to develop hotel cleaning best practices, social interactions and workplace protocol as the pandemic continues.

    The trade organization created a Safe Stay council filled with industry leaders (from chains like Hilton, Marriott, Best Western and Hyatt, among others) prepared to work with public health experts, medical leaders and scientists in putting together industry best practices. These include everything from new cleaning standards and strong cleaning products to social distancing guidelines to overall better transparency with guests during their stays.

    Hilton also said this week that it is partnering with the company behind Lysol, as well as the Mayo Clinic, to better ensure cleanliness in its hotels. The new program will be called "Hilton CleanStay" and aims to to give guests peace of mind when staying at a Hilton property, whether they are in guest rooms, restaurants, the gym or other public areas.

    Full details are being ironed out, but several initiatives in development include:

    An official room seal indicating that a room hasn't been accessed after a deep cleaning

    The removal of pen, paper and guest directories in favor of a digital option (or available on request)

    Contactless check-in, where guests can complete check-in and check-out processes via a mobile app and receive a digital room key (Hilton Honors members already have access to digital keys) 

    Electrostatic sprayers and ultraviolet light to be used in the sanitization process    

    Marriott said it will use electrostatic sprayers with hospital-grade disinfectants to sanitize throughout its hotels. In addition to guest rooms, the sprayers will be used in lobbies, gyms and other public areas. It said the cleaning agents used would be those recommended by the Centers for Disease Control and Prevention and the World Health Organization to kill all known pathogens. 

    In addition, the company is testing ultraviolet light technology for sanitizing room keys and adding hand sanitizer stations and signs in the lobby to remind anyone who enters to keep their distance from others. Marriott is also taking a look at what to do at properties that offer buffet service.
    
    Airbnb is establishing a new recommended "cleaning protocol" with the goal of reassuring both rental property hosts and their guests.

    For hosts, the guidelines will offer recommendations for personal protective gear, such as masks and gloves, while cleaning. Rentals will be spaced out by 24 hours for hosts who have opted in to the cleaning protocols, and hosts will have the option of an online feature that automatically prevents bookings less than 72 hours apart for an extra measure of safety. 
    `,
    date:new Date("Sep. 28, 2019"),
    image:"images/travel3.jpeg",
    category:"travel",
    views:30
  },
  {
    title:"Universal theme park openings delayed in Florida, Japan in wake of coronavirus pandemic",
    author:"Lloyd Lin",
    content:`ORLANDO, Fla. (AP) — The company that owns Universal theme parks around the world said it’s delaying construction on a fourth theme park in Florida and that the opening of a Nintendo-themed park in Japan will be pushed back by a few months in the wake of the coronavirus crisis.

    Comcast CEO Brian Roberts said Thursday that the company was delaying construction on its fourth park at Orlando Universal Resort. The Epic Universe theme park was announced last year to great fanfare.
    
    It also will push back the opening of Super Nintendo World at Universal Studios Japan in Osaka, Roberts said.
    
    “There is no doubt that our theme parks will reopen,” Roberts said on an earnings report call. “And when they do, I believe they will benefit from strong pent-up demand.”
    
    The company’s U.S. theme parks have been closed since mid-March when lockdown orders began to be issued by governors and mayors across the U.S. in an effort to stop the spread of the virus. Company officials on Thursday gave no indication when they would reopen or when furloughed workers would be able to return to work.
    
    Theme park revenue for the company in the first quarter of 2020 dropped by almost a third to $869 million compared to the same time period in 2019 when revenue was $1.2 billion.

    Comcast purchased NBCUniversal almost a decade ago. During that time, company officials say, Comcast has put more money into theme parks than any other part of the company. That investment had paid for Harry Potter-themed lands and rides based on other franchises, such as “Fast & Furious.”

    The fourth park in Orlando will be the biggest investment the Comcast NBCUniversal has made in its theme park business. Originally scheduled to open in 2023, it will have a park, hotels, restaurants and shops. Comcast executives didn’t say how long the construction would be postponed.

    The company’s theme parks team is focused on putting in the right protocols, infrastructure and technology to ensure safety once they reopen, Roberts said.

    “We love these businesses,” Roberts said. “They have been one of our fastest-growing in the last 10 years. They are extremely profitable, historically resilient.”

    So, about Disney theme parks:Disney World and Disneyland reopenings are still uncertain. Here's what the parks could look like when they do

    Life after coronavirus:Ready to travel as soon as it's safe? So is everyone else 
    `,
    date:new Date("Mar. 30, 2020"),
    image:"images/travel4.jpeg",
    category:"travel",
    views:17
  },
  {
    title:"Cruise lines working to get crews home amid coronavirus pandemic, but it's slow process",
    author:"Hamaad Chaney",
    content:`Cruise ships entering and exiting Port Canaveral are periodically dropping off crew members, so they can return to their home countries, port officials say.

    It's a process occurring at ports throughout the country — and is strictly regulated by the U.S. Coast Guard, U.S. Customs and Border Protection, and the Centers for Disease Control and Prevention, reports Florida Today, which is part of the USA TODAY Networ.
    
    Because of the coronavirus pandemic, the CDC instituted a "no-sail order" on cruise lines that initially took effect March 14, and now is extended through July 19, banning passenger cruises.
    
    Port Canaveral Chief Executive Officer John Murray says the cruise lines' efforts to get crew members home is "a very, very distinct process." It affects crew members who are not essential to the ships' operations when they are without passengers, as is now the case. Examples include members of the ships' hotel services and entertainment staffs.
    
    At Port Canaveral, the "repatriation" for crew members from various countries involves a bus or van pulling up to the dock area at the port to transport crew members to an airport, typically Orlando International or Miami International. The crew members then board a charter flight – rather than a commercial flight – to fly home. No crew members get on the bus or the flight unless they are tested to make sure they are not ill.

    If the charter flight is canceled for some reason, the crew members are transported back to the port, reboard their ship, and must be in quarantine for 14 days, Murray said. 

    At any other time, cruise ship crew members are required to remain on the ships, Murray said.

    "It's been a very, very slow process," Murray said.

    Earlier this month:More than 90,000 cruise crewmembers left to battle coronavirus – at times without pay

    On Tuesday, nine Americans were denied disembarkation from Holland America's MS Oosterdam at the Port of Los Angeles by the CDC.

    CDC spokeswoman Jasmine Reed told USA TODAY that the agency "has informed all cruise lines operating ships in U.S. waters, including Holland America Line and its parent company, the Carnival Corp., of these safety requirements, which includes arranging nonpublic transportation."

    She added, "While these plans are under review, CDC permits cruise ships to disembark their crew members if cruise line executives – including the Chief Medical Officer, the Chief Compliance Officer, and the Chief Executive Officer – attest that the cruise line has complied with requirements for the safe disembarkation of crew." 

    Reed noted, "In the last two weeks, other cruise lines have provided signed attestations to disembark crew members. And CDC has approved those disembarkations. Neither Holland America nor Carnival provided the attestation despite requests from CDC."

    Holland America and Carnival told the agency that arranging travel for its crew without using commercial aircraft was proving too expensive, she added.

    "Because Holland America and Carnival failed to provide the safety attestation, disembarkation would have violated the No Sail Order and federal laws, which carry criminal penalties," Reed explained. "Therefore, CDC, U.S. Coast Guard, U.S. Customs and Border Protection, California Department of Public Health, Los Angeles County Health Department, and the Los Angeles Police Department worked together to enforce the No Sail Order. Rather than comply with the No Sail Order and disembark its American crew, the Oosterdam departed." 

    Erik Elvejord, Holland America spokesperson, said that the no-sail order doesn't prevent disembarkation but has "such onerous requirements" that the cruise line is "not able to debark crew."

    The CDC requirements include:

    Repatriation of crew members on government or industry chartered private flights or private transport.
    72 hours notice to state and local health departments with jurisdiction for the seaport, the state, county or city of residence for disembarking crew members.
    Cruise ship operators must ensure crew members do not:
    Stay in a hotel before going home.
    Take public transportation to get to charter flights.
    Enter a public terminal.
    Take commercial flights after charter flights are done.
    Have a transportation layover of more than 8 hours.
    Have any interaction with the public on the journey home.
    72 hours notice to the CDC for U.S. residents who plan to take private vehicles home.
    Any commercial travel used by crew members on their journeys home must be approved by the CDC on a "case by case" basis.
    The crew members on the Oosterdam are not alone in their predicament, Elvejord told USA TODAY: "Virtually every ship we have has crew members on it. You have to have crew on the ship to operate it, even at anchor … it's called 'safe minimal manning.' "

    There are 48 American crew members on Holland America ships, 11 of whom will remain on board for "minimal manning."

    "Our remaining U.S. crew members are all over the country so the requirement to fly everyone home only via charter flights/private plane is very challenging," Sally Andrews, spokesperson for Holland America added. "We continue to work with the CDC for an option to use commercial airlines for healthy crew to travel home like other U.S. citizens are allowed to do."  
    `,
    date:new Date("Aug. 27, 2019"),
    image:"images/travel5.jpeg",
    category:"travel",
    views:5
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   var articleDates = articles.map(function(a) {  
    a.id = uuid.v4()
    a.createdAt = new Date(), 
    a.updatedAt = new Date()
    return a
  })
  
  return queryInterface.bulkInsert('Articles', articleDates, {})
},

down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.
  */
    return queryInterface.bulkDelete('Articles', null, {});

}
};
