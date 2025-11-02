const posts = [
    {
        "id": 1,
        "title": "A short Naration of Lorem Ipsum",
        "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        "id": 2,
        "title": "Another Post Title",
        "body": "It has survived not only five centuries, but also the leap into electronic typesetting."
    }
];

{
    "posts": posts
}

describe('Hello World Test', () => {
    it('successfully loads', () => {
        cy.visit('/');
        cy.contains('Welcome to the React App');
    });
});

{
    "defaultCommandTimeout": 10000,
    "baseUrl": "http://localhost:3000"
}