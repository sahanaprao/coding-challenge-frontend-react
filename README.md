![Concular](https://github.com/Concular/coding-challenge-frontend-react/blob/main/Concular_onwhite_coloredplus.svg)

# coding-challenge-frontend-react
Coding challenge for developers looking to join the tech team at Concular UG as a front-end (React) engineer. Good luck! https://concular.de

## Context

Let's consider Concular is planning to launch a simple 1 page Market Place website where they can show all the available product in their product inventory to allow a website user to browse and perform the in-place search of product. Now you have been given a task to build this app with React, Typescript and other relavent tools. 

# Project Wireframe

You can find all website wireframe on Miro. Here is wireframe link 👉 https://miro.com/app/board/o9J_lJ2iPuA=/

# API Endpoint

```
   POST https://asterix-dev.concular.com/material-service/marketplace/mp
   
```

#### Request Body
```
   {
        "cursor": 0,  // pointer for records so in an initial call you would send 0 and in a subsequent call you would send cursor which you would receive from API response
        "limit": 2  // limit coulbe be number of records that you want to fetch it could be 1,2,3,4..... my advice would be setting it 5 or 10 
   }
```

#### Response Body
[Sample Response](https://github.com/Concular/coding-challenge-frontend-react/blob/main/sample-response.json)

In response you would also get 

```
        "meta": {
            "hasMoreData": true,
            "cursor": 60
        }
```

which has information about `cursor` for the next chunk of records and `hasMoreData` properties which tells you whether next chunk of records exist in database or not. You can use this field to show the load more button.  


## Product Requirements

As a market place user:

  - [ ] I want to see a list of product on the market place web page.
  - [ ] For each product
      - [ ] I want to see product image if available. (hint: You can pick first image form images list of product)
      - [ ] Product title or name    
  - [ ] I want to see the first 10 product, with the ability to - paginate (10 product per page) by clicking on Load more button.
  - [ ] I want to see Load More button only when more product exist.
  - [ ] I want to see a loading state until the list is available.
  - [ ] I want to search product by title or name from listed product.
  - [ ] I want to see an empty state if there are no results. 

## Your Mission

Create the React application that satisfies all must-have requirements above, plus any nice-to-have requirements you wish to include.

You can use any boilerplate/approach you prefer (nextjs, create react app, ...), but try to keep it simple. We encourage you to use your favorite tools and packages to build a solid React application.

You can assume that you do not have to support legacy browsers. Feel free to use modern features such as **fetch** or **flexbox**.

Host the website on the service of your choice (Github Pages, zeit, Heroku, AWS, GCloud, ...)

## Tech Requirements

- React - Version: "^16.13.1"
- Bonus: If you use React concepts such as context, Hooks 
- Tests: Jest + react-testing-library / enzyme
- Code Linter, Prettier
- Typescript
- CSSinJS is a plus: styled-components, styled-system, LESS, SASS ...

## Instructions

- Fork this repo
- The challenge is on!
- Build a performant, clean and well-structured solution
- Commit early and often. We want to be able to check your progress
- Make the app public. Deploy it using the service of your choice
- Create a pull request
- Please complete your working solution within 7 days of receiving this challenge, and be sure to notify us (nishant@concular.com) when it is ready for review.
- If you have any questions related to this coding challenge please write to Nishant /He/Him (nishant@concular.com)

## License

We have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).
