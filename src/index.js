function getMessage() {
    return "Welcome to AWS Continuous Deployment";
}
Save the file.
Update the expected message in test/app.test.js as well:
assert.strictEqual(
    getMessage(),
    "Welcome to AWS Continuous Deployment"
);
