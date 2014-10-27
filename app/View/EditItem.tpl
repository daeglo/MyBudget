<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">Update Budget Item</h4>
    </div>
    <div class="panel-body">
        <form class="form-horizontal" role="form">
            <div class="form-group">
                <label for="name" class="control-label col-sm-3">Description</label>
                <div class="col-sm-9">
                    <input type="text" id="name" class="form-control col-sm-9" ng-model="item.name" placeholder="Description" />
                </div>
            </div>
            <div class="form-group">
                <label for="amount" class="control-label col-sm-3">Amount</label>
                <div class="controls col-sm-9">
                    <div class="input-group">
                        <span class="input-group-addon">$</span>
                        <input type="number" id="amount" class="form-control" ng-model="item.amount" placeholder="Amount" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="period" class="control-label col-sm-3">Frequency</label>
                <div class="controls col-sm-4">
                    <period-picker period="item.period"></period-picker>
                </div>
            </div>
        </form>
    </div>
    <div class="panel-footer text-right">
        <button class="btn btn-success" ng-click="ok()">Ok</button>
        <button class="btn btn-warning" ng-click="cancel()">Cancel</button>
    </div>
</div>
