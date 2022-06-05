import React from 'react'

export default function Alert(props) {
    return (
      <>
        <div style={{height:50}}>
          {props.alert && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>{props.alert.type}</strong>: {props.alert.msg}
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          )}
        </div>
      </>
    );
}
