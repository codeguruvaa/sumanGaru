import React from 'react';

function Form() {
    return (
        <div>

            <form>
             User Name : <input type="type" />
             <br />
             Select Your Item :
             <input list="browsers" />
             <datalist id="browsers">
                <option value="Internet Explorer" />
                <option value="Firefox"/>
                <option value="Chrome"/>
                <option value="Opera"/>
                <option value="Safari"/>
            </datalist>
            <br />
            <button>
                submit
            </button>
            </form>



        </div>
    );
}

export default Form;