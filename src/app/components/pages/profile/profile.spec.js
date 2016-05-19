var testing_1 = require('@angular/core/testing');
// Load the implementations that should be tested
var profile_component_1 = require('./profile.component');
testing_1.describe('Profile', function () {
    // provide our implementations or mocks to the dependency injector
    testing_1.beforeEachProviders(function () { return [
        About
    ]; });
    testing_1.it('should log ngOnInit', testing_1.inject([profile_component_1.Profile], function (about) {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();
        about.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));
});
//# sourceMappingURL=profile.spec.js.map