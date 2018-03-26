# Learn React
> Learn React.js with TypeScript

## Saving local state

**Takeaways**

* Use `this.state = {...}` only in constructor.
* Don't use `this.state` because it will not re-render a component.
* State is async.
* When using the previous state, use `this.state((prevState, props) => {stuff: oldValue - newValue})`; fn instead of obj.
* Merging is shallow.
* The data flows down.

**Docs**

* https://reactjs.org/docs/state-and-lifecycle.html