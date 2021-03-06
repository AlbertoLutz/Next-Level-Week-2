import React from 'react';
import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../TeacherItem';




function TeachersList() {
    return (
        <div id="page-teachers-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="weed-day">Dia da semana</label>
                        <input type="text" id="weed-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
              <TeacherItem />
            </main>
        </div>
    )
}

export default TeachersList;