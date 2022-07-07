
const arrayIndexChange = ( arr, old_index, new_index, position ) => {
    if ( new_index >= arr.length ) {
        let k = 0;
        if ( position === 'before' ) {
            k = new_index - arr.length;
        } else {
            k = new_index - arr.length + 1;
        }

        while ( k-- ) {
            arr.push( undefined );
        }
    }
    arr.splice( new_index, 0, arr.splice( old_index, 1 )[0] );
    return arr; // for testing
};

module.exports.arrayIndexChange = arrayIndexChange;