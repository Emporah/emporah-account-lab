// Additional distinct accounting cases. Changing figures, names or option order
// never changes a family ID; a paired case keeps its ID in either practice mode.
const expandedConcepts={
 capital:[
 ['Asset improvement','Expenditure increasing an existing asset’s capacity or performance beyond its previous standard.','A new attachment permanently doubles a machine’s production capacity.'],
 ['Excluded training cost','Staff training is normally expensed rather than included in equipment cost.','Employees attend a course on using the newly installed machine.'],
 ['Carriage inwards on an asset','Delivery necessary to bring purchased equipment to its intended location.','The supplier charges separately to deliver a new machine to the factory.'],
 ['Trade discount on an asset','A reduction in the purchase price included in the calculation of asset cost.','The agreed machine purchase price is reduced by a supplier’s trade discount.'],
 ['Correction of an expensed asset','Debit the non-current asset and credit the expense incorrectly charged, before any depreciation adjustment.','A material computer purchase was debited to repairs; the accountant corrects the capital/revenue error.']
 ],
 principles:[
 ['Materiality','Considering whether an omission or misstatement could influence users’ decisions.','A tiny stationery discrepancy is assessed against its size and nature before deciding how much investigation is proportionate.'],
 ['Faithful representation','Information reflecting transactions completely, neutrally and without material error.','An accountant includes all evidenced liabilities rather than hiding an inconvenient payable.'],
 ['Comparability','Information enabling users to identify similarities and differences across businesses or periods.','A lender compares two businesses using accounts prepared on explained, compatible bases.'],
 ['Timeliness','Making information available early enough to influence decisions.','Management receives the accounts before deciding whether to extend a customer’s credit.'],
 ['Integrity','Being straightforward and honest in professional and business relationships.','An accountant refuses to create a fictitious invoice to meet a profit target.']
 ],
 depreciation:[
 ['Depreciable amount','Cost less residual value, allocated over useful life.','A £10,000 machine with a £1,000 residual value has £9,000 to allocate.'],
 ['Pro-rata charge','Depreciation apportioned for the part of the period specified by the accounting policy.','An annual charge is multiplied by six twelfths for six months of use.'],
 ['Depreciation expense','The period’s allocation of an asset’s depreciable amount to the SPL.','The current year’s equipment charge is debited to an expense account.'],
 ['Useful life','The period over which the asset is expected to be available for use by the business.','Management expects to use a machine for four years before replacement.'],
 ['Residual-value limit','Stopping depreciation from reducing carrying amount below the stated residual value.','A calculated final charge is reduced so the asset remains at its £500 residual value.']
 ],
 disposal:[
 ['Removal of asset cost','Credit the asset account and debit disposals with the original cost.','The full £6,000 cost of a sold machine is removed from Equipment.'],
 ['Removal of accumulated depreciation','Debit accumulated depreciation and credit disposals with depreciation on the sold asset.','The £4,000 accumulated depreciation relating to a sold machine is cleared.'],
 ['Cash disposal receipt','Debit bank and credit disposals with cash proceeds.','The business banks the proceeds received from selling old equipment.'],
 ['Remaining carrying amount','The asset cost left after deducting its accumulated depreciation.','Before comparing with proceeds, £8,000 cost less £5,000 depreciation leaves £3,000.'],
 ['Replacement cash payment','Replacement asset price less the part-exchange allowance.','A £12,000 replacement van costs £9,000 in cash after a £3,000 trade-in allowance.']
 ],
 irrecoverable:[
 ['Write-off expense effect','Writing off a receivable increases expense and reduces profit.','A valid £200 write-off is recorded and profit falls by £200.'],
 ['Write-off asset effect','Writing off a receivable reduces the gross trade receivables asset.','A customer’s £200 balance is removed from the receivables control account.'],
 ['Direct recovery treatment','Debit bank and credit irrecoverable debt expense when using a direct recovery method.','Under the stated direct recovery policy, a receipt on a written-off debt reduces the expense without reinstatement.'],
 ['Recovery is not a new sale','Receiving a previously written-off debt does not create a new sales transaction.','An old customer unexpectedly pays; the accountant rejects posting the receipt to sales revenue.'],
 ['Authorised write-off evidence','Documented grounds and approval supporting removal of a customer balance.','An insolvency notice and the manager’s approval support the decision to remove a debt.']
 ],
 bank:[
 ['Unrecorded direct debit','A bank payment needing a cash book update when absent from the books.','A rent direct debit appears on the statement but has not been recorded in the cash book.'],
 ['Bank interest received','Income credited by the bank that increases the cash book bank balance.','The statement includes interest earned that is absent from the business’s records.'],
 ['Bank error','An incorrect bank statement entry to query with the bank rather than treat as a valid business transaction.','The bank confirms that a different customer’s payment was wrongly charged to this account.'],
 ['Cash book error','An incorrect business entry requiring correction in the cash book.','A genuine £240 payment was entered by the bookkeeper as £420.'],
 ['Statement credit balance','From the bank’s perspective, a balance representing funds owed to the customer.','The bank statement shows Cr £2,000 for money available to the business.']
 ],
 control:[
 ['Receivables contra','An agreed offset debiting payables and crediting receivables for the same counterparty.','A business agrees to offset an amount it owes a supplier against a debt owed by that same business.'],
 ['Sales returns control entry','A credit to receivables reducing amounts owed by customers.','A credit note for returned goods reduces the receivables control balance.'],
 ['Purchase returns control entry','A debit to payables reducing amounts owed to suppliers.','A supplier credit note for returned goods reduces the payables control balance.'],
 ['Customer overpayment','A credit customer balance arising when receipts exceed the amount due.','A customer mistakenly pays more than the outstanding invoice balance.'],
 ['Reconciled control total','Agreement between a corrected control account and the corrected supporting account list.','After correcting the daybook total and an individual entry, the customer list equals the RLCA.']
 ],
 allowance:[
 ['Eligible general-allowance base','Receivables remaining after write-offs and excluding balances covered separately by specific allowances under the stated policy.','The accountant removes written-off and specifically assessed balances before applying the general percentage.'],
 ['Allowance increase journal','Debit allowance adjustment expense and credit the allowance account.','The required allowance rises, so the extra amount is charged to the SPL.'],
 ['Allowance decrease journal','Debit the allowance account and credit allowance adjustment expense.','The required allowance falls, so the reduction is credited to the SPL.'],
 ['Unchanged allowance','No movement journal when required and existing allowance balances are equal.','The calculation gives £600 and the allowance already stands at £600.'],
 ['Allowance preserves customer balances','An allowance reduces reported net receivables without crediting each customer account.','A doubtful balance remains on the customer’s account while a separate allowance reduces the SFP value.']
 ],
 accruals:[
 ['Expense accrual journal','Debit the expense and credit an accrued-expense liability.','Unpaid year-end electricity is added to expense and an accrual is recognised.'],
 ['Expense prepayment journal','Debit a prepayment asset and credit the expense.','Insurance for next year is removed from this year’s expense and shown as a prepayment.'],
 ['Income accrual journal','Debit accrued income and credit income earned.','Earned but unpaid rent is added to income with an accrued-income asset.'],
 ['Income prepayment journal','Debit income and credit a prepaid-income liability.','Rent received for next year is removed from current income and shown as a liability.'],
 ['Period coverage','Allocating a payment or receipt to the periods to which it relates.','A twelve-month insurance payment is split between two reporting years according to the months covered.']
 ],
 suspense:[
 ['Error of original entry','The same incorrect amount is entered on both debit and credit sides.','Both sides of a £540 invoice are recorded as £450, so the trial balance still balances.'],
 ['Complete reversal','Both correct accounts are used but debit and credit sides are reversed.','A bank receipt is credited to bank and debited to receivables for equal amounts.'],
 ['Compensating errors','Separate errors offset each other’s effect on trial balance totals.','One expense debit is overstated by the same amount as another debit is understated.'],
 ['Wrong-side correction','An incorrect posting is reversed and the correct posting made, creating twice the original amount on the correcting side.','A £100 rent debit was entered as a credit; a £200 debit is needed to reverse and replace it.'],
 ['No suspense required','An equal-sided error is corrected without a suspense entry.','A purchase was fully omitted from both sides; both correct entries are now recorded directly.']
 ],
 inventory:[
 ['Carriage inwards','Delivery costs of bringing purchased goods to the business, included in eligible inventory cost.','Freight to bring resale goods from the supplier to the warehouse is added to their cost.'],
 ['Selling cost','A cost of selling goods deducted when calculating NRV rather than included in inventory cost.','Expected selling commission is deducted from an item’s expected sale price for NRV.'],
 ['Completion cost','Further cost needed to finish goods, deducted in calculating NRV.','Unfinished goods require additional finishing work before they can be sold.'],
 ['Item-by-item comparison','Comparing cost and NRV separately so gains on one item do not offset losses on another.','One product’s high NRV is not used to cancel another product’s required write-down.'],
 ['Overstated closing inventory','An error overstating current assets and profit by understating cost of sales.','The year-end inventory total is accidentally entered above its correct value.']
 ],
 etb:[
 ['Adjustment debit column','The ETB column recording debit sides of year-end adjustments.','An expense accrual is entered as a debit adjustment to the expense.'],
 ['Adjustment credit column','The ETB column recording credit sides of year-end adjustments.','A depreciation adjustment credits accumulated depreciation.'],
 ['Adjusted balance','The original balance combined with its debit and credit adjustments.','A rent debit is reduced by the credit adjustment for a closing prepayment before extension.'],
 ['Loss balancing figure','A loss is entered in the SPL credit and SFP debit columns.','Expenses exceed income, so the loss balances the opposite columns to a profit.'],
 ['ETB arithmetic check','Checking that debit and credit totals agree in each balanced pair of columns.','After entering the result, both SPL columns and both SFP columns total equally.']
 ],
 incomplete:[
 ['Sales returns in reconstruction','A credit receivables movement that must be included when reconstructing credit sales.','Credit notes reducing customer balances are added to receipts and closing balances when isolating sales.'],
 ['Purchase returns in reconstruction','A debit payables movement that must be included when reconstructing credit purchases.','Supplier credit notes are included alongside payments when finding missing purchases.'],
 ['Drawings adjustment for profit','Adding drawings to the capital increase when reconstructing profit.','The owner withdrew funds, so withdrawals are added back when finding profit from capital movements.'],
 ['Capital introduced adjustment for profit','Deducting new owner investment from the capital increase when reconstructing profit.','The owner’s new investment is removed from the apparent increase in capital to isolate earned profit.'],
 ['Cost percentage under a margin','Cost of sales is the complement of gross margin as a percentage of sales.','At a 25% gross margin, cost of sales represents 75% of sales revenue.']
 ],
 ratios:[
 ['Capital employed','Capital plus non-current liabilities in the FAPS ROCE calculation used here.','Owner’s capital and a long-term loan are added before calculating ROCE.'],
 ['Margin versus profit amount','A profit percentage can change differently from the absolute amount of profit.','Profit rises, but sales rise faster, so the profit margin falls.'],
 ['Lower unit purchase cost','With price and sales mix unchanged, a lower cost increases gross margin.','The supplier reduces cost per unit while selling prices remain unchanged.'],
 ['Higher overhead burden','With other factors unchanged, higher operating expenses reduce net margin.','Rent rises while sales and gross profit remain unchanged.'],
 ['Percentage-point change','The arithmetic difference between two percentages, rather than a percentage growth rate.','A margin moves from 20% to 25%, an increase of five percentage points.']
 ],
 sole:[
 ['Sales returns','Returns deducted from gross sales to determine net sales revenue.','Customer credit notes for returned goods reduce the sales figure used in the SPL.'],
 ['Purchase returns','Returns deducted from purchases in determining net purchases.','Goods returned to a supplier reduce purchases in the cost-of-sales calculation.'],
 ['Carriage inwards in cost of sales','Inward delivery costs added to net purchases.','Transport from the supplier to the business is included with purchases.'],
 ['Drawings are not expenses','Owner withdrawals reduce capital rather than profit for the year.','The sole trader takes cash for personal use; it is kept out of SPL expenses.'],
 ['Capital introduced is not income','Owner investment increases capital rather than sales or profit.','The owner deposits personal savings into the business bank account.']
 ],
 partnership:[
 ['Residual profit','Profit remaining for division after the agreement’s interest and salary appropriations.','Agreed partner salaries and interest on capital are deducted before sharing the remainder.'],
 ['Profit-sharing ratio','The agreed proportions used to allocate residual profit or loss.','Two partners split the remaining result in a 3:2 ratio.'],
 ['Fixed capital account','An account normally changed by permanent capital contributions or withdrawals.','A partner’s permanent additional investment is recorded separately from routine current-account movements.'],
 ['Current-account debit balance','A balance indicating a partner’s withdrawals exceed credited allocations and the opening credit.','A partner has taken more than their accumulated profit allocations.'],
 ['Interest on drawings current entry','A debit to a partner’s current account for the agreed charge on withdrawals.','A drawings-interest charge reduces the credit balance owed to a partner.']
 ],
 double:[
 ['Asset decrease','A credit-side change reducing a business asset.','Paying rent credits bank because the bank asset falls.'],
 ['Liability decrease','A debit-side change reducing an obligation owed by the business.','Paying a supplier debits trade payables to clear the outstanding amount.'],
 ['Credit sale','Debit receivables and credit sales when goods or services are supplied on credit.','A customer is invoiced for completed work and will pay later.'],
 ['Customer receipt','Debit bank and credit receivables for payment of an existing credit sale.','A customer settles an invoice that has already been recorded as sales.'],
 ['Supplier payment','Debit payables and credit bank for settlement of an existing supplier invoice.','A cheque pays an already recorded amount owed to a supplier.']
 ]
};
for(const [id,rows] of Object.entries(expandedConcepts))topicConcepts[id].push(...rows);
function practiceMode(){return state.practiceMode==='challenge'?'challenge':'mixed'}
function challengeProfile(id){let answers=state.attempts.filter(a=>a.topic===id&&a.practiceMode==='challenge').slice(-8),correct=answers.filter(a=>a.correct).length,accuracy=answers.length?correct/answers.length:0,target=answers.length<5?1:accuracy>=.8?3:accuracy>=.5?2:1;return {answers:answers.length,correct,target,label:['','Foundation','Applied','Stretch'][target]}}
function practiceModeControls(){let mode=practiceMode();return `<section class="practice-mode-controls"><h3>Topic practice</h3><label>Practice mode<select id="topic-practice-mode"><option value="mixed" ${mode==='mixed'?'selected':''}>Mixed practice (default)</option><option value="challenge" ${mode==='challenge'?'selected':''}>Adaptive challenge</option></select></label><p><strong>Mixed practice:</strong> A balanced mix of question difficulty. Results count towards your topic traffic lights.</p><p><strong>Adaptive challenge:</strong> Difficulty adjusts to your recent challenge answers. Results are tracked separately from traffic lights.</p><p>Both modes share the 40-question cooldown per topic.</p></section>`}
function caseQuestion(id,index){let t=courseTopics.find(t=>t.id===id),row=topicConcepts[id][index],wrong=shuffled(topicConcepts[id].filter((_,i)=>i!==index)).slice(0,3).map(r=>r[0]),q=makeChoice(id,'Identify the specific accounting feature',row[2]+' Which description most specifically identifies the feature emphasised in this case?',row[0],wrong,row[0]+': '+row[1]+' Broader categories may also apply; this answer identifies the specific feature described.',t.hint);return {...q,family:id+':case:'+index,difficulty:1,format:'choice'}}
function comparisonQuestion(id,a,b){let t=courseTopics.find(t=>t.id===id),rows=topicConcepts[id],first=rows[a],second=rows[b],correct='A: '+first[0]+'; B: '+second[0],wrong=['A: '+second[0]+'; B: '+first[0],'A: '+first[0]+'; B: '+first[0],'A: '+second[0]+'; B: '+second[0]],difficulty=(a+b)%3===0?3:2,q;
 if(difficulty===3){let claims=[{label:'Case A: '+first[0]+' — '+first[1],correct:true},{label:'Case B: '+second[0]+' — '+second[1],correct:true},{label:'Case A: '+second[0]+' — '+second[1],correct:false},{label:'Case B: '+first[0]+' — '+first[1],correct:false}];q={id,kind:'multi',format:'review',skill:'Evaluate two specific accounting features',question:'Case A: '+first[2]+' Case B: '+second[2]+' Select the TWO explanations that best identify the specific feature emphasised in each case. A broader description may apply without being the best fit.',options:shuffled(claims),selectedAnswers:[],required:2,bestFit:true,hint:t.hint,explanation:'A: '+first[0]+'. '+first[1]+' B: '+second[0]+'. '+second[1]+' These descriptions match each case’s emphasis, rather than just a broader category.',answered:false}}
 else if((a+b)%2===0){let items=[{key:String(a),label:first[0]},{key:String(b),label:second[0]}];q={id,kind:'match',format:'scenario',skill:'Match two distinct business events',question:'Match each business event to its accounting treatment.',items:items.reverse(),targets:[{key:String(a),text:'Case A: '+first[2]},{key:String(b),text:'Case B: '+second[2]}],assignments:{},activeItem:null,hint:t.hint,explanation:'A: '+first[0]+'. '+first[1]+' B: '+second[0]+'. '+second[1],answered:false}}
 else q={...makeChoice(id,'Distinguish two accounting cases','Case A: '+first[2]+' Case B: '+second[2]+' Which option gives the best-fitting specific description for BOTH cases? Broader categories may also apply.',correct,wrong,'A: '+first[0]+'. '+first[1]+' B: '+second[0]+'. '+second[1],t.hint),format:'choice'};
 return {...q,family:id+':compare:'+a+':'+b,difficulty};
}
function questionFamilyBank(id){let pool=new Map(),add=q=>{q.family=q.family||q.template;pool.set(q.family,q)};
 for(let i=0;i<24;i++){let q=courseGenerate(id,i<4?i:undefined);q.template=id+':legacy:'+q.skill;q.format=q.kind;q.difficulty=q.kind==='number'&&/pro-rata|specific|opening|reconstruct|residual|current account|margin versus|mark-up versus|ROCE|each item|capital/i.test(q.skill)?3:2;add(q)}
 for(const format of ['definitions','scenario','order','review']){let q=makeInteraction(id,format);q.difficulty=format==='definitions'?1:format==='scenario'?2:3;add(q)}
 for(let i=0;i<topicConcepts[id].length;i++)add(caseQuestion(id,i));for(let a=0;a<topicConcepts[id].length;a++)for(let b=a+1;b<topicConcepts[id].length;b++)add(comparisonQuestion(id,a,b));return [...pool.values()];
}
function variedQuestion(id){let history=Array.isArray(state.questionHistory?.[id])?state.questionHistory[id].filter(x=>x&&typeof (x.family||x.template)==='string').slice(-40):[],blocked=new Set(history.map(x=>x.family||x.template)),candidates=questionFamilyBank(id).filter(q=>!blocked.has(q.family));
 if(!candidates.length)throw Error('No fresh question families available for '+id);let mode=practiceMode(),profile=challengeProfile(id),roll=Math.random(),target=mode==='challenge'?(profile.target===1?(roll<.65?1:roll<.95?2:3):profile.target===2?(roll<.2?1:roll<.8?2:3):(roll<.1?1:roll<.4?2:3)):[1,2,2,3][state.attempts.filter(a=>a.topic===id&&a.practiceMode!=='challenge').length%4],preferred=candidates.filter(q=>q.difficulty===target);
 // Never break the cooldown to satisfy difficulty. Nearby levels remain in the mix.
 if(preferred.length)candidates=preferred;else {let distance=Math.min(...candidates.map(q=>Math.abs(q.difficulty-target)));candidates=candidates.filter(q=>Math.abs(q.difficulty-target)===distance)}
 let different=candidates.filter(q=>q.format!==history.at(-1)?.format);if(different.length)candidates=different;let q=shuffled(candidates)[0];q.practiceMode=mode;q.template=q.family;q.targetDifficulty=target;
 if(!state.questionHistory||typeof state.questionHistory!=='object'||Array.isArray(state.questionHistory))state.questionHistory={};state.questionHistory[id]=[...history,{family:q.family,template:q.family,format:q.format}].slice(-40);save();return q;
}
function practiceQuestionLabel(){return `<div class="practice-question-mode"><span class="tag">${current.practiceMode==='challenge'?'Adaptive challenge':'Mixed practice'}</span><span class="tag">${['','Foundation','Applied','Stretch'][current.difficulty||2]}</span><p>${current.practiceMode==='challenge'?'Challenge result · Separate from your traffic-light rating':'Mixed result · Counts towards your topic traffic light'}</p></div>`}

function challengeTopicSummary(id){let answers=state.attempts.filter(a=>a.topic===id&&a.practiceMode==='challenge');return answers.length?`<p class="challenge-topic-summary">Challenge: ${answers.filter(a=>a.correct).length}/${answers.length} correct · Current focus: ${challengeProfile(id).label}</p>`:''}
