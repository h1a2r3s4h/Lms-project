import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/student/Loading'

const Dashboard = () => {
  const { currency } = useContext(AppContext)
  const [dashboardData, setDashboardData] = useState(null)

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  }, [])

  return dashboardData ? (
    <div className="min-h-screen p-4 md:p-8">
      <div className="flex flex-wrap gap-6">
        {/* Total Enrollments */}
        <div className="flex items-center gap-4 border border-gray-300 rounded-md px-6 py-4 w-64 shadow-sm">
          <img src={assets.patients_icon} alt="enrollments_icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">{dashboardData.enrolledStudentsData.length}</p>
            <p className="text-sm text-gray-500">Total Enrolments</p>
          </div>
        </div>

        {/* Total Courses */}
        <div className="flex items-center gap-4 border border-gray-300 rounded-md px-6 py-4 w-64 shadow-sm">
          <img src={assets.appointments_icon} alt="courses_icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">{dashboardData.totalCourses}</p>
            <p className="text-sm text-gray-500">Total Courses</p>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="flex items-center gap-4 border border-gray-300 rounded-md px-6 py-4 w-64 shadow-sm">
          <img src={assets.earning_icon} alt="earnings_icon" className="w-10 h-10" />
          <div>
            <p className="text-2xl font-semibold text-gray-700">
              {currency}{(dashboardData.enrolledStudentsData.length * 141.48).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">Total Earnings</p>
          </div>
        </div>

        {/* Latest Enrollments */}
        <div>
          <h2 className='pb-4 text-lg font-medium'>Latest Enrollments</h2>
          <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
            <table className='table-fixed md:table-auto w-full overflow-hidden'>
              <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Student Name</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>
              <tbody className='text-sm text-gray-500'>
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className='border-b border-gray-50/20'>
                    <td className='px-4 py-3 text-center hidden sm:table-cell'>{index + 1}</td>
                    <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                      <img src={item.student.imageUrl} alt='profile' className='w-9 h-9 rounded-full' />
                      <span className='truncate'>{item.student.name}</span>
                    </td>
                    <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Dashboard
