//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

module powerbi {

    /** Instantiates a RejectablePromise that wraps the given Deferred object. */
    export function RejectablePromise2<T, E>(deferred: IDeferred2<T, E>): RejectablePromise2<T, E> {
        return new RejectablePromiseImpl(deferred);
    }

    export function RejectablePromise<T>(deferred: IDeferred<T>): RejectablePromise<T> {
        return new RejectablePromiseImpl(deferred);
    }

    /** enumeration of promise states */
    enum promiseState {
        pending,
        resolved,
        rejected,
    }

    class RejectablePromiseImpl<T, E> implements RejectablePromise2<T, E> {
        private deferred: IDeferred2<T, E>;
        private state: promiseState;

        constructor(deferred: IDeferred2<T, E>) {
            debug.assertValue(deferred, 'deferred');

            this.deferred = deferred;
            this.state = promiseState.pending;
            deferred.promise.then(() => this.state = promiseState.resolved, () => this.state = promiseState.rejected);
        }

        /**
         * Regardless of when the promise was or will be resolved or rejected, then calls one of the success or error callbacks asynchronously as soon as the result is available. The callbacks are called with a single argument: the result or rejection reason. Additionally, the notify callback may be called zero or more times to provide a progress indication, before the promise is resolved or rejected.
         * This method returns a new promise which is resolved or rejected via the return value of the successCallback, errorCallback.
         */
        public then(successCallback, errorCallback): IPromise2<T, E> {
            return this.deferred.promise.then(successCallback, errorCallback);
        }

        /** Shorthand for promise.then(null, errorCallback) */
        public catch(callback): IPromise2<T, E> {
            return this.deferred.promise.catch(callback);
        }

        /**
         * Allows you to observe either the fulfillment or rejection of a promise, but to do so without modifying the final value. This is useful to release resources or do some clean-up that needs to be done whether the promise was rejected or resolved. See the full specification for more information.
         * Because finally is a reserved word in JavaScript and reserved keywords are not supported as property names by ES3, you'll need to invoke the method like promise['finally'](callback) to make your code IE8 and Android 2.x compatible.
         */
        public finally(callback): IPromise2<T, E> {
            return this.deferred.promise.finally(callback);
        }

        /**
         * Indicates if a promise is resolved.
         */
        public resolved(): boolean {
            return this.state === promiseState.resolved;
        }

        /**
         * Indicates if a promise is rejected.
         */
        public rejected(): boolean {
            return this.state === promiseState.rejected;
        }

        /**
         * Indicates if a promise is pending. A promise is pending if it is not rejected or resolved.
         */
        public pending(): boolean {
            return this.state === promiseState.pending;
        }

        /**
         * Rejects a pending promise
         */
        public reject(reason?: E): void {
            if (this.pending()) {
                this.deferred.reject(reason);
                this.state = promiseState.rejected;
            }
        }
    }
}