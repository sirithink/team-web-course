describe('Ajax', function() {
    var markup;
    beforeEach(function() {
        markup = $('#markup').html();
    });

    describe('GET', function() {
        it('Gets the root resource of the tapirs site', function(done) {
            getRootFromTapirs(function(text) {
                expect(text).to.equal('Tapirs Rule!')
                done();
            });
        });

        it('calls a service with parameters');

    });

    describe('POST', function() {
        it('calls a service with parameters');
        it('calls a service with parameters');
    });

    describe('Ajax', function() {
        it('calls a service with parameters');
        it('calls a service with parameters');
    });



    afterEach(function() {
        $('#markup').html(markup);
    });
});
