import React from 'react'

import Teams from './Teams.component'

import './Aboutus.scss'

const Aboutus = () => (
    <section className="aboutus">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="primary-heading">
                        <h3>Team</h3>
                        <div className="border"></div>
                    </div>
                    <Teams />

                    <div className="primary-heading">
                        <h3>About Us</h3>
                        <div className="border"></div>
                    </div>

                    <div>
                        <div className="aboutus-content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime quos quis, illum, velit, repudiandae cum accusamus doloribus incidunt sapiente laudantium cumque fugiat necessitatibus recusandae quo laborum minus tempora saepe minima deserunt exercitationem a? Eveniet totam quaerat minima inventore autem tempora architecto. Officia quam esse vel veniam doloribus fugit voluptates repellendus magni! Dolorem nemo possimus quis corporis sed assumenda debitis sunt ex laborum quae fugit alias aperiam id voluptas totam doloribus quidem optio voluptatibus tenetur, iure repudiandae rem. Eligendi officia accusamus adipisci quibusdam qui repellendus quisquam molestias fugit facilis deserunt ad mollitia perspiciatis doloremque, inventore officiis magnam quo dolorum, delectus possimus doloribus quasi! Repellendus expedita molestiae aut quod distinctio nam fuga. Obcaecati libero ut, placeat veritatis corporis aliquid magni voluptate exercitationem, vero ad magnam earum commodi nisi, quisquam assumenda consectetur alias ipsam dignissimos aliquam ullam! Et rem assumenda reiciendis qui, tempore necessitatibus repudiandae ab ratione unde dicta ipsa, aspernatur magni harum, ut obcaecati iusto. Consectetur maiores quibusdam mollitia culpa, ad dolores temporibus delectus! Beatae cumque veniam dolorum debitis repellendus alias odio officiis nemo porro numquam delectus, incidunt explicabo ipsam quia fugiat saepe, neque, maxime consequatur reprehenderit. Repellat eligendi autem commodi quidem. Quaerat modi recusandae pariatur aspernatur in soluta saepe voluptatem?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Aboutus