# Framer Montion Demo
this is repo to store my learning progress and some of cool framer motion component. I create this repo with vite, because of this the project structure is doesn't quite neat. Maybe this repo will updated when i have a free time.


## NOTE
### React Router
At first i wanted am going to to use new `Data API` feature from react router to be used in this project. this `Data API` is easy to use and the `createBrowserRouter` syntax make it possible to use an object as a route. that's mean i can make a root route object that can be used as routing and data for sidebar. 

But there's a problem. when i was going to create children for a parent route that also passing some state. i don't know how to make it. in documentation it's only shown about root route that passed as argument in `createBrowserRouter` data API. it does't show how to nest child with state in this syntax.  the syntax only pass indepentdent components.

After some trying in make it work, i decide to use old format as routing in this project. i already try something like, use `createBrowserRouter` created object as nested childern, use `useRoutes`, and passing it as Component or children.

> In the end i will stick with old format



