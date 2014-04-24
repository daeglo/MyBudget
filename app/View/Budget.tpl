<div>
    <div class="page-header row">
        <h3 class="col-xs-6">My Budget</h3>
        <div class="col-xs-6 text-right">Display categories by
            <button type="button" class="btn btn-default" dropdown-toggle>
                {{period.suffix}}
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu pull-right">
                <li ng-repeat="period in Period">
                    <a ng-click="set(period)">{{period.suffix}}</a>
                </li>
            </ul>
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
