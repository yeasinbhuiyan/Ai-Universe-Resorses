import React from 'react';

const Modal = (props) => {
    console.log(props.Modal.data.image_link)
    const { integrations, image_link, features,description } = props.Modal.data
    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2">
                        <div className="card-body">
                            <p className='font-semibold'>{description}</p>
                          <div className='flex justify-between mt-3'>
                            <div>
                            <h2 className="card-title text-xl font-semibold">Features</h2>
                            {
                                features&& Object.values(features).map(feature => <li>{feature.feature_name}</li>)
                            }
                            </div>
                            <div>
                                <h2 className='ext-xl font-semibold'>Integrations</h2>
                                {
                                    integrations && integrations.map(integration => <li>{integration}</li>)
                                }
                            </div>
                          </div>
                          
                        </div>
                       <div>
                       <figure><img className='w-full rounded' src={image_link? image_link[0] : ''} alt="Album" /></figure>
                       </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Remove</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;