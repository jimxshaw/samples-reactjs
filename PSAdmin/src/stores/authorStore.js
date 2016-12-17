"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../actions/authorActions");
var EventEmitter = require("events").EventEmitter;
var objectAssign = require("object-assign");
var _ = require("lodash");

var CHANGE_EVENT = "change";

var _authors = [];

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
    },

    getAllAuthors: function() {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, { id: id });
    }
});

// Register the store with dispatcher.
Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
    }
});

module.exports = AuthorStore;