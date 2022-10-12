import React from 'react';

const Discription = () => {
    return (
        <div className='container justify-content-center col-lg-6 col-md-6 col-sm-12 mt-5 mb-5'>

            <div className='h-25'><img className='img-fluid ' src="https://i0.wp.com/ytimg.googleusercontent.com/vi/S5JDPi_6N2s/maxresdefault.jpg?resize=160,120" alt="" /> </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Project Description</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Project description:

                            QuizBuzz is a quiz app where  a developer can test knowledge by taking free mock test.
                            One can easily start test by clicking the "start quiz" button shown in the quiz page on his/her desired topic.

                            After clicking "start quiz" button, the questions appear in the screen. You have to select the options. As soon as you choose the option, a toast will fire containing the the is right or wrong. You can also see the right answer by clicking "eye button".

                            On the statistics page, you'll see a bar chart which shows the question number on the related topics shown on the quiz page.
                            And Blog section contains some frequently asked questions.

                            Thank you.
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Discription;