<div>
    <div class="page-header row">
        <h3 class="col-xs-6">My Budget</h3>
        <div class="col-xs-6 text-right">Display categories by
            <period-picker period="period"></period-picker>
        </div>
    </div>
    <div class="col-md-8 col-md-push-4">
        <highchart id="summaryChart" config="summaryChart"></highchart>
    </div>
    <div class="col-md-4 col-md-pull-8">
        <category category="budget.income" period="period"></category>
        <category category="budget.expenses" period="period"></category>
        <category category="budget.savings" period="period"></category>
    </div>
</div>
