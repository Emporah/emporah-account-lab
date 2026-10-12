// Original terminology and scenarios, aligned to the existing FAPS topic scope.
// Each row links a term to both a definition and a concrete example.
const topicConcepts={
 capital:[
 ['Capital expenditure','Expenditure on acquiring or improving a non-current asset.','A business buys a new delivery van for use over several years.'],
 ['Revenue expenditure','A cost of running the business or maintaining normal asset performance.','The annual routine service restores a van to its normal working condition.'],
 ['Directly attributable cost','A necessary cost of bringing an asset to the location and condition required for use.','Installation and testing are needed before a new machine can operate.'],
 ['Capitalisation threshold','A stated policy below which small asset purchases are expensed on materiality grounds.','A business expenses a £60 stapler under its £100 small-item policy.'],
 ['Drawings','Assets taken out of the business by its owner for personal use.','The sole trader pays for a personal holiday from the business bank account.']
 ],
 principles:[
 ['Accruals','Recognising income when earned and expenses when incurred.','December electricity is included in December expenses although paid in January.'],
 ['Business entity','Treating the business separately from its owner for accounting purposes.','The owner’s private grocery bill is recorded as drawings.'],
 ['Going concern','Preparing accounts on the basis that the business will continue operating for the foreseeable future.','Equipment is accounted for on a continuing-use basis rather than an imminent liquidation basis.'],
 ['Consistency','Using consistent accounting treatments between periods unless a justified change is needed.','The same depreciation method is applied each year unless circumstances justify a change.'],
 ['Prudence','Exercising caution under uncertainty while keeping estimates neutral.','An evidenced allowance is made for doubtful customers without deliberately exaggerating losses.']
 ],
 depreciation:[
 ['Straight-line depreciation','Allocating the depreciable amount equally over useful life.','Cost less residual value is divided by five years for an annual charge.'],
 ['Diminishing balance depreciation','Applying a percentage to opening carrying amount.','A 20% annual charge is applied to the asset’s net book value at the start of the year.'],
 ['Residual value','The estimated amount obtainable on disposal at the end of useful life, after disposal costs.','A machine is expected to be sold for a net £500 after its final year of use.'],
 ['Accumulated depreciation','The total depreciation recorded on an asset up to a given date.','Three years of depreciation charges are shown against equipment cost in the SFP.'],
 ['Carrying amount','Asset cost less accumulated depreciation, assuming no impairment.','Equipment costing £8,000 with £3,000 accumulated depreciation is shown at £5,000.']
 ],
 disposal:[
 ['Disposal account','A temporary account collecting asset cost, accumulated depreciation and disposal proceeds.','A bookkeeper transfers the records of a sold machine into one account to calculate the result.'],
 ['Disposal proceeds','The consideration received for an asset being disposed of.','A buyer pays £2,400 for an old machine.'],
 ['Loss on disposal','The amount by which carrying amount exceeds disposal proceeds.','A van with a £5,000 carrying amount is sold for £4,000.'],
 ['Profit on disposal','The amount by which disposal proceeds exceed carrying amount.','Equipment with a £1,000 carrying amount is sold for £1,500.'],
 ['Part-exchange allowance','The value allowed for an old asset towards the purchase of a replacement.','A dealer credits £2,000 for an old van against the price of its replacement.']
 ],
 irrecoverable:[
 ['Irrecoverable debt','A receivable judged not recoverable and removed from the books.','An insolvent customer’s unpaid balance is written off after recovery is judged impossible.'],
 ['Doubtful receivable','A customer balance whose recovery is uncertain but which has not been written off.','A customer has financial difficulties, but some payment is still expected.'],
 ['Write-off journal','Debit irrecoverable debt expense and credit trade receivables.','A £300 customer balance is removed using an expense debit and a receivables credit.'],
 ['Reinstatement on recovery','Restoring a previously written-off balance before recording its receipt.','Before banking an unexpected payment, the old write-off is reversed into the customer account.'],
 ['Receipt after reinstatement','Debit bank and credit trade receivables when the restored debt is paid.','After restoring the balance, the customer’s payment increases bank and clears the receivable.']
 ],
 bank:[
 ['Unpresented cheque','A cheque payment recorded in the cash book but not yet cleared by the bank.','A supplier cheque is in the cash book but absent from the bank statement.'],
 ['Uncleared lodgement','A receipt recorded in the cash book but not yet credited on the bank statement.','A deposit entered by the business on the last day of the month reaches the statement next month.'],
 ['Cash book update','Recording a bank transaction omitted from the business’s bank records.','A bank fee on the statement is posted to bank charges and bank.'],
 ['Bank reconciliation statement','A statement explaining remaining differences between the updated cash book and bank statement.','Uncleared deposits and unpresented cheques explain the difference after book corrections.'],
 ['Overdraft','A negative business bank balance representing an amount owed to the bank.','The cash book bank account has a credit balance because payments exceed available funds.']
 ],
 control:[
 ['Receivables ledger control account','The general ledger account summarising amounts owed by customers.','The total credit sales for the month is posted to a single customer control account.'],
 ['Payables ledger control account','The general ledger account summarising amounts owed to suppliers.','The total credit purchases for the month is posted to a single supplier control account.'],
 ['Subsidiary ledger','Individual customer or supplier accounts supporting a control account.','The bookkeeper checks separate balances for each customer.'],
 ['Control account correction','A correction needed where a summary total posted to the general ledger is wrong.','The sales daybook is undercast, but every individual customer invoice is correct.'],
 ['Subsidiary ledger correction','A correction needed in an individual account while the general ledger total is correct.','One customer payment is missing from that customer’s account but is included in the correct cash book total.']
 ],
 allowance:[
 ['Specific allowance','An allowance estimated for an identified doubtful customer balance.','The business estimates a £400 shortfall on one named customer’s balance.'],
 ['General allowance','An allowance based on a stated percentage of eligible receivables.','A 3% estimate is applied to the remaining eligible customer balances.'],
 ['Allowance increase','An additional expense and an increase in the allowance balance.','The required closing allowance is £900 compared with an opening allowance of £600.'],
 ['Allowance decrease','A reduction in the allowance credited to the SPL.','The required closing allowance falls from £700 to £500.'],
 ['Net receivables','Receivables after write-offs, less the closing allowance.','Remaining receivables of £10,000 less a £500 allowance are reported at £9,500.']
 ],
 accruals:[
 ['Accrued expense','An expense incurred but unpaid at the reporting date, recognised as a liability.','December wages are owed at year-end and will be paid in January.'],
 ['Prepaid expense','An amount paid for a future period, recognised as an asset.','Part of insurance paid this year covers the first three months of next year.'],
 ['Accrued income','Income earned but not yet received, recognised as an asset.','Rent has been earned by year-end but the tenant has not paid it.'],
 ['Prepaid income','Income received before it is earned, recognised as a liability.','A customer pays in December for services to be delivered in February.'],
 ['Reversal of opening adjustment','Undoing the previous period’s closing adjustment so it is not counted twice.','Last year’s electricity accrual is reversed before this year’s bills and closing adjustment are finalised.']
 ],
 suspense:[
 ['Error of omission','A transaction is completely left out of the accounting records.','Neither side of a supplier invoice is entered.'],
 ['Error of principle','An entry uses the wrong class of account.','A new machine is debited to repairs expense instead of equipment.'],
 ['Error of commission','An entry uses the wrong account within the correct class.','A receipt from one customer is credited to another customer’s account.'],
 ['One-sided error','Only one side of a transaction is missing or incorrect, causing unequal totals.','A cash sale is credited to sales but the debit to bank is omitted.'],
 ['Suspense account','A temporary account used for a trial balance difference while one-sided errors are investigated.','A temporary debit balances the trial balance until the missing debit entry is found.']
 ],
 inventory:[
 ['Cost of inventory','Purchase and other eligible costs of bringing inventory to its present location and condition.','Purchase price and inward delivery costs are included in the cost of goods for resale.'],
 ['Net realisable value','Estimated selling price less costs to complete and sell.','Expected proceeds of £100 less £15 completion costs and £5 selling costs give £80.'],
 ['Lower of cost and NRV','The valuation rule applied to each inventory item.','An item costing £90 with an NRV of £80 is valued at £80.'],
 ['Inventory write-down','Reducing inventory value when net realisable value is below cost.','Damaged goods are reduced from their £200 cost to their £120 NRV.'],
 ['Closing inventory','Goods remaining at the reporting date, included as a current asset and deducted in cost of sales.','Unsold goods counted at year-end are included in the SFP and the cost-of-sales calculation.']
 ],
 etb:[
 ['SPL debit column','The statement column used for expense balances.','Rent expense is extended to the statement of profit or loss debit column.'],
 ['SPL credit column','The statement column used for income balances.','Sales revenue is extended to the statement of profit or loss credit column.'],
 ['SFP debit column','The statement column normally used for asset balances and drawings.','Equipment at cost is extended to the statement of financial position debit column.'],
 ['SFP credit column','The statement column normally used for liabilities, capital and accumulated depreciation.','Trade payables are extended to the statement of financial position credit column.'],
 ['Profit balancing figure','A profit is entered in the SPL debit and SFP credit columns.','SPL income exceeds expenses, so the balancing amount is placed on SPL debit and SFP credit.']
 ],
 incomplete:[
 ['Missing credit sales','Sales reconstructed from receivables movements and related entries.','Customer receipts and opening and closing receivables are used to find unrecorded credit sales.'],
 ['Missing credit purchases','Purchases reconstructed from payables movements and related entries.','Supplier payments and opening and closing payables are used to find unrecorded credit purchases.'],
 ['Mark-up','Gross profit expressed as a percentage of cost of sales.','Goods costing £100 are sold for £125, giving a 25% profit relative to cost.'],
 ['Margin','Gross profit expressed as a percentage of sales revenue.','Goods costing £100 are sold for £125, giving a 20% profit relative to sales.'],
 ['Capital comparison','Finding profit from capital movements after adjusting for drawings and capital introduced.','Closing capital less opening capital is adjusted for the owner’s withdrawals and new investment.']
 ],
 ratios:[
 ['Gross profit margin','Gross profit divided by sales revenue, multiplied by 100.','The gross profit earned from each £100 of sales is measured.'],
 ['Net profit margin','Profit for the year divided by sales revenue, multiplied by 100.','The final profit retained from each £100 of sales is measured.'],
 ['ROCE','Profit for the year divided by capital employed, multiplied by 100 in these FAPS questions.','Profit is compared with capital plus non-current liabilities.'],
 ['Expense percentage','A particular expense divided by sales revenue, multiplied by 100.','Rent is compared with sales to see what share of revenue it consumes.'],
 ['Comparative analysis','Interpreting results against other periods or suitable businesses, with context.','A fall in margin is considered alongside price changes, costs and the prior year rather than in isolation.']
 ],
 sole:[
 ['Cost of sales','Opening inventory plus net purchases and carriage inwards, less closing inventory.','Goods available for sale are reduced by the value of stock still unsold at year-end.'],
 ['Gross profit','Sales revenue less cost of sales.','Sales of £50,000 less cost of sales of £30,000 leave £20,000 before other expenses.'],
 ['Profit for the year','Income less expenses for the accounting period.','Gross profit and other income are reduced by operating expenses to find the year’s result.'],
 ['Closing capital','Opening capital plus capital introduced and profit, less drawings.','The owner’s opening stake increases with profit and investment and falls with personal withdrawals.'],
 ['Net assets','Total assets less total liabilities.','The value remaining after deducting all obligations from the business’s assets equals the owner’s capital.']
 ],
 partnership:[
 ['Appropriation account','A statement allocating partnership profit under the partnership agreement.','The partners’ agreed salaries, interest and residual profit shares are allocated after profit is calculated.'],
 ['Partner salary','An agreed appropriation of profit rather than an employee wage expense.','A partner receives a £12,000 allocation before remaining profit is shared.'],
 ['Interest on capital','An agreed profit allocation based on partners’ capital balances.','Partners receive a 5% allocation on their fixed capital before the residual split.'],
 ['Interest on drawings','An agreed charge to partners that increases profit available for appropriation.','A charge on a partner’s withdrawals is added in determining profit available for allocation.'],
 ['Current account','The account recording routine profit allocations and drawings under a fixed-capital system.','A partner’s salary allocation and personal withdrawals are recorded separately from fixed capital.']
 ],
 double:[
 ['Asset increase','A debit-side change increasing a resource controlled by the business.','A bank receipt increases the business’s bank asset with a debit entry.'],
 ['Liability increase','A credit-side change increasing an obligation owed by the business.','An unpaid supplier invoice increases trade payables with a credit entry.'],
 ['Expense increase','A debit-side change recognising an additional cost incurred in earning income.','Rent incurred is entered on the debit side of rent expense.'],
 ['Income increase','A credit-side change recognising additional income earned by the business.','Earned sales revenue is entered on the credit side of sales.'],
 ['Accounting equation','Assets equal capital plus liabilities.','A £1,000 capital contribution increases bank and the owner’s capital by equal amounts.']
 ]
};
const topicWorkflows={
 capital:['Get the invoice and details of what was purchased','Decide whether the cost acquires or improves an asset or runs the business','Identify eligible costs and apply the stated capitalisation policy','Record the cost in the appropriate asset or expense account'],
 principles:['Establish the facts and supporting evidence','Identify the relevant accounting principle and information needs','Choose the treatment that faithfully reflects the facts','Record and explain the treatment with supporting evidence'],
 depreciation:['Confirm asset cost, residual value and the stated policy','Calculate the annual depreciation using that policy','Apply any required time apportionment and residual-value limit','Post depreciation expense and accumulated depreciation'],
 disposal:['Confirm asset cost, accumulated depreciation and disposal proceeds','Calculate carrying amount from cost less accumulated depreciation','Compare proceeds with carrying amount to calculate the profit or loss','Post asset removal, proceeds and the resulting disposal profit or loss'],
 irrecoverable:['Review evidence that a customer balance cannot be recovered','Identify and confirm the amount to write off','Debit irrecoverable debt expense and credit trade receivables','Check the revised customer balance and receivables total'],
 bank:['Compare cash book entries with the bank statement','Identify bank transactions missing from the cash book','Update the cash book for these transactions and errors','Prepare the reconciliation for remaining timing differences'],
 control:['Obtain the control balance and subsidiary ledger list','Investigate the differences against source records','Correct the control account and individual accounts as required','Compare the corrected control balance with the corrected list total'],
 allowance:['Remove confirmed irrecoverable debts from receivables','Calculate specific allowances for identified doubtful balances','Apply the general percentage to the remaining eligible balance','Compare the required allowance with the opening allowance and post the movement'],
 accruals:['Reverse any opening adjustment under the stated reversal policy','Record the period’s receipts or payments','Calculate the closing accrual or prepayment from period coverage','Post the closing adjustment and determine income or expense for the period'],
 suspense:['Identify the trial balance difference and any suspense balance','Trace the difference to the erroneous original entry','Work out and post the correcting journal','Check the corrected trial balance and that the suspense balance is cleared'],
 inventory:['Count the goods remaining at the reporting date','Establish cost and NRV for each item','Value each item at the lower of its cost and NRV','Total the values and record closing inventory'],
 etb:['Enter the trial balance in the ETB','Record the required adjustment entries','Extend adjusted balances to the correct SPL or SFP columns','Enter the profit or loss balancing figure and verify the columns balance'],
 incomplete:['Gather opening and closing receivables and customer transactions','Set up a receivables control account reconstruction','Insert receipts and other known debit and credit movements','Balance the reconstruction to determine missing credit sales'],
 ratios:['Identify the ratio and the reporting period to be analysed','Obtain the correct numerator and denominator from the accounts','Divide and multiply by 100 for a percentage ratio','Interpret the result with suitable comparisons and business context'],
 sole:['Adjust the trial balance for year-end items','Prepare the SPL and calculate profit for the year','Calculate closing capital from profit and owner movements','Prepare the SFP and check that net assets equal closing capital'],
 partnership:['Calculate partnership profit before appropriations','Add interest on drawings where the agreement requires it','Deduct agreed partner salaries and interest on capital','Share residual profit in the agreed profit-sharing ratio'],
 double:['Read the source document and identify the transaction','Identify the accounts affected and how each changes','Determine the debit and credit entries','Post equal debits and credits to the relevant accounts']
};
function makeInteraction(id,mode){let t=courseTopics.find(t=>t.id===id),rows=shuffled(topicConcepts[id].map((r,i)=>({key:String(i),label:r[0],definition:r[1],scenario:r[2]}))).slice(0,4);
 if(mode==='review'){let truths=new Set(shuffled([0,1,2,3]).slice(0,2));return {id,kind:'multi',format:'review',template:id+':review',skill:'Review several statements',question:'Select the TWO statements that are correct, then submit your review.',options:rows.map((r,i)=>({label:r.label+' — '+(truths.has(i)?r.definition:rows[(i+1)%rows.length].definition),correct:truths.has(i)})),selectedAnswers:[],required:2,hint:t.hint,explanation:'Check each term against its meaning. '+rows.map(r=>r.label+': '+r.definition).join(' '),answered:false}}
 let items,targets;if(mode==='order'){items=topicWorkflows[id].map((label,i)=>({key:String(i),label}));targets=items.map((item,i)=>({key:item.key,text:'Step '+(i+1)}))}else{items=rows.map(r=>({key:r.key,label:r.label}));targets=shuffled(rows.map(r=>({key:r.key,text:mode==='scenario'?r.scenario:r.definition})))}
 let order=shuffled(items.slice());if(order.every((item,i)=>item.key===targets[i].key))order.push(order.shift());
 return {id,kind:'match',format:mode,template:id+':'+mode,skill:mode==='order'?'Put the workflow in order':mode==='scenario'?'Match scenarios to accounting terms':'Match terms to definitions',question:mode==='order'?'Arrange this suggested accounting workflow from first to last.':mode==='scenario'?'Match each business scenario to the accounting term it illustrates.':'Match each accounting term to its definition.',items:order,targets,assignments:{},activeItem:null,hint:mode==='order'?'Follow the dependency between steps: gather and assess evidence before calculation, posting and final checks.':t.hint,explanation:mode==='order'?'This is one suggested workflow. '+items.map((item,i)=>(i+1)+'. '+item.label).join(' '):rows.map(r=>r.label+': '+r.definition).join(' '),answered:false};
}

function interactiveQuestionView(){if(current.kind==='multi')return `<p class="score-line">Choose exactly ${current.required}. You can change your selections before submitting.</p><div class="answers" role="group" aria-label="Statements">${current.options.map((o,i)=>`<button type="button" class="answer ${current.selectedAnswers.includes(i)?'selected':''}" data-multi="${i}" aria-pressed="${current.selectedAnswers.includes(i)}">${esc(o.label)}</button>`).join('')}</div><button type="button" class="primary" id="submit-interaction" ${current.selectedAnswers.length===current.required?'':'disabled'}>Submit review →</button>`;
 return `<p class="score-line">Drag a card to a ${current.format==='order'?'step':'definition or scenario'}, or select a card then choose a destination. You can also use each dropdown.</p><div id="interaction-board">${matchingBoard()}</div><button type="button" class="primary" id="submit-interaction" ${interactionComplete()?'':'disabled'}>Submit ${current.format==='order'?'order':'matches'} →</button><p id="match-status" class="score-line" aria-live="polite"></p>`;
}
function matchingBoard(){return `<div class="match-bank" role="group" aria-label="Cards">${current.items.map(item=>{let placed=Object.values(current.assignments).includes(item.key);return `<button type="button" class="match-card ${current.activeItem===item.key?'selected':''} ${placed?'placed':''}" draggable="${!current.answered}" data-match-item="${item.key}" aria-pressed="${current.activeItem===item.key}" ${current.answered?'disabled':''}>${esc(item.label)}${placed?' <small>Placed · move to change</small>':''}</button>`}).join('')}</div><div class="match-targets">${current.targets.map((target,i)=>{let assigned=current.assignments[target.key],item=current.items.find(x=>x.key===assigned),correct=assigned===target.key;return `<div class="match-target ${current.answered?(correct?'match-correct':'match-wrong'):''}" data-match-target="${target.key}"><button type="button" class="match-destination" data-match-destination="${target.key}" ${current.answered?'disabled':''}><span>${esc(target.text)}</span><strong>${item?esc(item.label):'Place a card here'}</strong></button><label class="match-select-label">${current.format==='order'?target.text:'Match '+(i+1)}<select data-match-select="${target.key}" ${current.answered?'disabled':''}><option value="">Choose a card</option>${current.items.map(x=>`<option value="${x.key}" ${assigned===x.key?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label>${current.answered?`<p class="match-result">${correct?'Correct':'Correct answer: '+esc(current.items.find(x=>x.key===target.key).label)}</p>`:''}</div>`}).join('')}</div>`}
function interactionComplete(){return current?.kind==='match'&&current.targets.every(t=>current.items.some(item=>item.key===current.assignments[t.key]))}
function assignMatching(targetKey,itemKey){if(current?.kind!=='match'||current.answered||!current.targets.some(t=>t.key===targetKey)||(itemKey!==''&&!current.items.some(item=>item.key===itemKey)))return;
 // Moving a placed card swaps the previous destination's card, rather than duplicating it.
 let previous=Object.keys(current.assignments).find(key=>current.assignments[key]===itemKey),displaced=current.assignments[targetKey];if(previous&&previous!==targetKey){if(displaced)current.assignments[previous]=displaced;else delete current.assignments[previous]}
 if(itemKey)current.assignments[targetKey]=itemKey;else delete current.assignments[targetKey];current.activeItem=null;refreshMatching();$('#match-status').textContent='Placed '+Object.keys(current.assignments).length+' of '+current.targets.length+' cards.';
}
function refreshMatching(){let focused=document.activeElement,selectKey=focused?.dataset?.matchSelect,cardKey=focused?.dataset?.matchItem,destinationKey=focused?.dataset?.matchDestination;$('#interaction-board').innerHTML=matchingBoard();$('#submit-interaction').disabled=current.answered||!interactionComplete();let selector=selectKey!==undefined?`[data-match-select="${selectKey}"]`:cardKey!==undefined?`[data-match-item="${cardKey}"]`:destinationKey!==undefined?`[data-match-destination="${destinationKey}"]`:null;if(selector)document.querySelector(selector)?.focus()}
function selectMatchingCard(key){if(current?.kind!=='match'||current.answered||!current.items.some(item=>item.key===key))return;current.activeItem=key;refreshMatching();$('#match-status').textContent='Card selected. Choose a destination.'}
function toggleStatement(index){if(current?.kind!=='multi'||current.answered||!current.options[index])return;let selected=current.selectedAnswers;current.selectedAnswers=selected.includes(index)?selected.filter(i=>i!==index):[...selected,index];document.querySelectorAll('[data-multi]').forEach(b=>{let on=current.selectedAnswers.includes(Number(b.dataset.multi));b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))});$('#submit-interaction').disabled=current.selectedAnswers.length!==current.required}
function submitInteraction(){if(!current||current.answered)return;let good,count,total;
 if(current.kind==='match'){if(!interactionComplete())return;total=current.targets.length;count=current.targets.filter(t=>current.assignments[t.key]===t.key).length;good=count===total}
 else if(current.kind==='multi'){if(current.selectedAnswers.length!==current.required)return;total=current.required;count=current.selectedAnswers.filter(i=>current.options[i].correct).length;good=count===total}else return;
 let previousRating=topicConfidence(current.id);current.answered=true;state.attempts.push({topic:current.id,correct:good,date:new Date().toISOString(),skill:current.skill,format:current.format,practiceMode:current.practiceMode||'mixed',difficulty:current.difficulty||2,family:current.family||current.template,partsCorrect:count,partsTotal:total});save();if(current.kind==='match')refreshMatching();document.querySelectorAll('[data-multi],#submit-interaction').forEach(b=>b.disabled=true);
 let review=current.kind==='multi'?`<ul>${current.options.map(o=>`<li>${current.bestFit?(o.correct?'Best fit':'Not the best fit'):(o.correct?'Correct statement':'Incorrect statement')}: ${esc(o.label)}</li>`).join('')}</ul>`:'';
 $('#feedback').innerHTML=`<div class="feedback ${good?'':'wrong'}"><strong>${good?'That’s right.':'Review the explanations, then try another question.'}</strong><p>${count} of ${total} ${current.kind==='match'?'placements':'correct statements'} correct. The question counts as correct when all parts are correct.</p>${review}<p>${esc(current.explanation)}</p>${confidenceFeedback(previousRating)}${saveError?'<p>Your browser could not save this result.</p>':''}</div><button class="primary" id="next-question">Try a new question →</button>`;$('#hint').hidden=true;$('#hint-text').hidden=true;
}
document.addEventListener('dragstart',e=>{let card=e.target.closest('[data-match-item]');if(!card||current?.kind!=='match'||current.answered)return;e.dataTransfer.setData('text/plain',card.dataset.matchItem);e.dataTransfer.effectAllowed='move'});
document.addEventListener('dragover',e=>{if(current?.kind==='match'&&!current.answered&&e.target.closest('[data-match-target]')){e.preventDefault();e.dataTransfer.dropEffect='move'}});
document.addEventListener('drop',e=>{let target=e.target.closest('[data-match-target]');if(!target||current?.kind!=='match'||current.answered)return;e.preventDefault();assignMatching(target.dataset.matchTarget,e.dataTransfer.getData('text/plain'))});
