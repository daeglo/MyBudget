<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Update Budget Item</h4>
    </div>
    <div class="panel-body">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="item.name" class="control-label col-sm-3">Description</label>
                <div class="col-sm-9">
                    <input type="text" id="item.name" class="form-control col-sm-9" ng-model="item.name" placeholder="Description" />
                </div>
            </div>
            <div class="form-group">
                <label for="item.amount" class="control-label col-sm-3">Amount</label>
                <div class="controls col-sm-9">
                    <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="number" id="item.amount" class="form-control" ng-model="item.amount" placeholder="Amount" />
                        <span class="input-group-btn">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{item.period.suffix}}
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu pull-right">
                                <li ng-repeat="period in Period">
                                    <a ng-click="set(period)">{{period.suffix}}</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="panel-footer text-right">
        <button class="btn btn-success" ng-click="ok()">Ok</button>
        <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
    </div>
</div>
