<div class="panel panel-primary">
    <h4 class="panel-heading panel-title">
        <span>{{category.name}}</span>
        <span class="pull-right glyphicon glyphicon-plus-sign" ng-click="newBudgetItem()"></span>
    </h4>
    <table class="table table-striped table-hover">
        <colgroup>
            <col class="col-xs-9" />
            <col class="col-xs-2" />
            <col class="col-xs-1" />
        </colgroup>
        <tr ng-repeat="item in category.items">
            <td>
                <a href ng-click="edit($index)">{{item.name}}</a>
                <small>{{item.amount | currency}}{{item.period.suffix}}</small>
            </td>
            <td class="text-right">{{item.per(period) | currency}}</td>
            <td class="text-center">
                <span class="glyphicon glyphicon-remove-sign" ng-click="category.removeBudgetItem(item)"></span>
            </td>
        </tr>
        <tfoot>
            <tr class="info">
                <th class="text-right">
                    <strong>
                        <em>Total:</em>
                    </strong>
                </th>
                <th class="text-right">
                    <strong>{{category.per(period) | currency}}</strong>
                </th>
                <th></th>
            </tr>
        </tfoot>
    </table>
</div>
