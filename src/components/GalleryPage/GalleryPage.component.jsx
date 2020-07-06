import React, { Component } from 'react'

import Work from './WorkComponent/Work.component'

import work1 from './WorkComponent/work1.jpeg';
import work2 from './WorkComponent/work2.jpeg';
import work3 from './WorkComponent/work3.jpeg';
import work4 from './WorkComponent/work4.jpeg';

import './GalleryPage.scss'
import GalleryContent from './GalleryContent.component';

export default class GalleryPage extends Component {
    constructor() {
        super();
        this.state = {
            kitchen: {
                id: "kitchen",
                title: "Modular Kitchen",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta enim dignissimos possimus nesciunt facere necessitatibus excepturi sint eum officiis!",
                images: [{
                    image: work1,
                    imageId: "image 1"
                },
                {
                    image: work2,
                    imageId: "image 2"
                },
                {
                    image: work3,
                    imageId: "image 3"
                },
                {
                    image: work4,
                    imageId: "image 4"
                }]
            },
            bedroom: {
                id: "bedroom",
                title: "Bedroom",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta enim dignissimos possimus nesciunt facere necessitatibus excepturi sint eum officiis!",
                images: [{
                    image: work1,
                    imageId: "image 5"
                },
                {
                    image: work2,
                    imageId: "image 6"
                },
                {
                    image: work3,
                    imageId: "image 7"
                },
                {
                    image: work4,
                    imageId: "image 8"
                }]
            },
            painting: {
                id: "painting",
                title: "Painting Works",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta enim dignissimos possimus nesciunt facere necessitatibus excepturi sint eum officiis!",
                images: [{
                    image: work1,
                    imageId: "image 9"
                },
                {
                    image: work2,
                    imageId: "image 10"
                },
                {
                    image: work3,
                    imageId: "image 11"
                },
                {
                    image: work4,
                    imageId: "image 12"
                }]
            },
            wardrobe: {
                id: "wardrobe",
                title: "Wardrobe",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta enim dignissimos possimus nesciunt facere necessitatibus excepturi sint eum officiis!",
                images: [{
                    image: work1,
                    imageId: "image 13"
                },
                {
                    image: work2,
                    imageId: "image 14"
                },
                {
                    image: work3,
                    imageId: "image 15"
                },
                {
                    image: work4,
                    imageId: "image 16"
                }]
            }
        }
    }

    render() {


        return (
            <div>
                <GalleryContent />
                <Work gallery={this.state.kitchen} />
                <Work gallery={this.state.bedroom} />
                <Work gallery={this.state.painting} />
                <Work gallery={this.state.wardrobe} />
            </div>
        )
    }
}