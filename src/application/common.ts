class JSONException {
    code: string = '';
    message: string = '';
    origin: string = '';

    constructor(code: string = '', message: string = '', origin: string = '') {
        this.code = code;
        this.message = message;
        this.origin = origin;
    }
}

export const sendJSONException = (provider: string, error: any): JSONException => {
    let errorResponse = new JSONException();

    try {
        if (error.response !== undefined) {
            errorResponse.code = error.response ? error.response.status : '0';
            errorResponse.message = error.response.data.error ? error.response.data.error.message : error.message;
        }
        else {
            errorResponse.code = error.status;
            errorResponse.message = error.message;
        }
        errorResponse.origin = provider;
    }
    catch (ex) {
        errorResponse.code = '500';
        errorResponse.message = 'Error interno';
        errorResponse.origin = provider;
    }
    finally {
        return errorResponse;
    }
}