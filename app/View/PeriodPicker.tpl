<span>
<button type="button" class="btn btn-default" dropdown-toggle>
    {{Periods[period].suffix}}
    <span class="caret"></span>
</button>
<ul class="dropdown-menu pull-right">
    <li ng-repeat="(key, period) in Periods">
        <a ng-click="set(key)">{{period.suffix}}</a>
    </li>
</ul>
</span>
