const customMethods = {
    myEach: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else if (typeof collection === 'object') {
        for (let key in collection) {
          if (collection.hasOwnProperty(key)) {
            callback(collection[key]);
          }
        }
      }
      return collection;
    },
  
    myMap: function(collection, callback) {
      const result = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          result.push(callback(collection[i]));
        }
      } else if (typeof collection === 'object') {
        for (let key in collection) {
          if (collection.hasOwnProperty(key)) {
            result.push(callback(collection[key]));
          }
        }
      }
      return result;
    }
  };
  
  describe('Custom Array and Object Methods', function() {
    describe('myEach', function() {
      it('calls alert with each element passed', function() {
        const array = [1, 2, 3];
        spyOn(window, 'alert');
        customMethods.myEach(array, element => alert(element));
        expect(window.alert).toHaveBeenCalledWith(1);
        expect(window.alert).toHaveBeenCalledWith(2);
        expect(window.alert).toHaveBeenCalledWith(3);
      });
  
      it('calls alert properly on object values', function() {
        const obj = { a: 1, b: 2, c: 3 };
        spyOn(window, 'alert');
        customMethods.myEach(obj, value => alert(value));
        expect(window.alert).toHaveBeenCalledWith(1);
        expect(window.alert).toHaveBeenCalledWith(2);
        expect(window.alert).toHaveBeenCalledWith(3);
      });
  
      it('returns the original collection', function() {
        const array = [1, 2, 3];
        const result = customMethods.myEach(array, element => console.log(element));
        expect(result).toEqual(array);
      });
    });
  
    describe('myMap', function() {
      it('successfully returns a correctly populated array', function() {
        const array = [1, 2, 3];
        const result = customMethods.myMap(array, element => element * 2);
        expect(result).toEqual([2, 4, 6]);
      });
  
      it('does not modify the original array', function() {
        const array = [1, 2, 3];
        const result = customMethods.myMap(array, element => element * 2);
        expect(array).toEqual([1, 2, 3]);
      });
  
      it('successfully returns a correctly populated array from modified object values', function() {
        const obj = { a: 1, b: 2, c: 3 };
        const result = customMethods.myMap(obj, value => value * 2);
        expect(result).toEqual([2, 4, 6]);
      });
  
      it('does not modify the original object', function() {
        const obj = { a: 1, b: 2, c: 3 };
        const result = customMethods.myMap(obj, value => value * 2);
        expect(obj).toEqual({ a: 1, b: 2, c: 3 });
      });
    });
  });
  