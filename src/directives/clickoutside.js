export default {
  priority: 700,
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
}



// Vue.directive('click-outside', {
//   priority: 700,
//   bind () {
   
//     let self  = this
//     this.event = function (event) { 
//     	console.log('emitting event')
//     	self.vm.$emit(self.expression,event) 
//  	  }
//     this.el.addEventListener('click', this.stopProp)
//     document.body.addEventListener('click',this.event)
//   },
  
//   unbind() {
//   	console.log('unbind')
//     this.el.removeEventListener('click', this.stopProp)
//     document.body.removeEventListener('click',this.event)
//   },
//   stopProp(event) {event.stopPropagation() }
// })