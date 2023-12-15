import './App.css'
import { Modal, Button } from 'react-bootstrap';

import { useState, useEffect } from 'react'
import { StandUpList } from './components/StandUpList'
import { TeamFilter } from './components/TeamFilter'
import { StandUpForm } from './components/StandUpForm'
import { getStandUp, getStandUpByTeamMember, createStandUp } from './services/standup'
import { getTeamMembers } from './services/team'
import { getProjects } from './services/project'

function App() {
  const [standUpData, setStandUpData] = useState([])
  const [teamMembers, setTeamMembers] = useState([])
  const [projects, setProjects] = useState([])
  const [teamMemberById, setTeamMemberById] = useState('')
  const [formData, setFormData] = useState({
    teamMemberById: '',
    teamMember: '',
    projectId: '',
    project: '',
    workYesterday: '',
    workToday: '',
    impediment: ''
  })

  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await getTeamMembers()
        setTeamMembers(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchTeamMembers()

    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjects()

  }, [])

  useEffect(() => {
    if (teamMemberById) {
      const fetchStandUpByTeamMember = async () => {
        try {
          const data = await getStandUpByTeamMember(teamMemberById)
          console.log("Fetched data:", teamMemberById, data);
          setStandUpData(data)
        } catch (error) {
          console.error(error);
        }
      }
      fetchStandUpByTeamMember()
    } else {
      const fetchStandUp = async () => {
        try {
          const data = await getStandUp()
          console.log("Fetched data:", data);
          setStandUpData(data)
        } catch (error) {
          console.error(error);
        }
      }
      fetchStandUp()
    }
  }, [teamMemberById])

  const onCreateStandUp = async (e) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.teamMemberById || !formData.projectId || !formData.workYesterday || !formData.workToday) {
      // Show an error message to the user
      console.error('Fill out all required fields');
      return;
    }

    const newStandUp = {
      teamMemberId: formData.teamMemberById, // need the teamMemberId
      teamMember: formData.teamMember,
      projectId: formData.projectId, // need the projectId
      project: formData.project,
      workYesterday: formData.workYesterday,
      workToday: formData.workToday,
      impediment: 'none'
    }

    try {
      const data = await createStandUp(newStandUp)
      console.log("Created data:", data);
      setStandUpData((prevStandUpData) => [...prevStandUpData, data]);
      setFormData({
        teamMemberById: '',
        teamMember: '',
        projectId: '',
        project: '',
        workYesterday: '',
        workToday: '',
        impediment: ''
      })
      closeModal();
    } catch (error) {
      console.error(error);
    }

  }

  const onTeamMemberFilterChange = (e) => {
    const memberId = e.target.value;
    if (memberId === 'all') {
      setTeamMemberById('');
      return;
    }
    setTeamMemberById(memberId);
  }

  const onTeamMemberChange = (e) => {
    const selectedMemberId = e.target.value;
    const selectedMember = teamMembers.find((member) => member._id === selectedMemberId);

    setFormData((prevData) => ({
      ...prevData,
      teamMemberById: selectedMemberId,
      teamMember: selectedMember ? selectedMember.name : '',
    }));

  };

  const onProjectChange = (e) => {
    const selectedProjectId = e.target.value;
    const selectedProject = projects.find((project) => project._id === selectedProjectId);

    setFormData((prevData) => ({
      ...prevData,
      projectId: selectedProjectId,
      project: selectedProject ? selectedProject.name : '',
    }));
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // Update form data for input fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = standUpData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(standUpData.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages });

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app container mt-4">
      <h1 className="text-center font-weight-bold display-4 display-md-2 mb-4">Remote Standup Note</h1>

      <div className='d-flex justify-content-around align-items-center'>
        <div className='' >
          <TeamFilter
            teamMembers={teamMembers}
            teamMemberById={teamMemberById}
            onTeamMemberFilterChange={onTeamMemberFilterChange}
          />
        </div>
        <div className=''>
          <Button variant="primary" onClick={openModal}>
            Add Standup
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Standup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StandUpForm
            formData={formData}
            teamMembers={teamMembers}
            projects={projects}
            onCreateStandUp={onCreateStandUp}
            onTeamMemberChange={onTeamMemberChange}
            onProjectChange={onProjectChange}
            onInputChange={onInputChange}
            onCloseModal={closeModal}
          />
        </Modal.Body>
      </Modal>

      <StandUpList currentItems={currentItems} />

      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default App
