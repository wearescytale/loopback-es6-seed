describe('Account: greet', () => {
    it('should return `Hi`', () => {
        return request
            .post('/accounts/greet')
            .send()
            .then(response => {
                expect(response.body).to.exist;
                expect(response.body.message).to.equal('Hi');
            })
        ;
    });
});
