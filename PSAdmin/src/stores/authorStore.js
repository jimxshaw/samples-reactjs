"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../actions/authorActions");
var EventEmitter = require("events").EventEmitter;
var objectAssign = require("object-assign");
var CHANGE_EVENT = "change";

// Define the store.
// Object assign takes an empty new object, extend it to EventEmitter's
// prototype and then finally define the rest the store so that whatever
// we put in the store will also have EventEmitter functionality as well.
var AuthorStore = objectAssign({}, EventEmitter.prototype, {

    // Know when the store changes.
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

// Register the store with dispatcher.
Dispatcher.register(function(action) {
    switch(action.actionType) {

    }
});

module.exports = AuthorStore;