/* eslint-disable no-console */

import { Spinner } from '@medicare/components'
import React, { Suspense, useEffect, useState } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import WelcomeScreen from './welcome/WelcomeScreen'

import MediCare from './MediCare'
import { TitleProvider } from './page-header/title/TitleContext'
import { remoteDb } from './shared/config/pouchdb'
import { getCurrentSession } from './user/user-slice'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    remoteDb
      .getSession()
      .then((session) => {
        if (cancelled) {
          return
        }
        if (session.userCtx.name) {
          dispatch(getCurrentSession(session.userCtx.name))
        }
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [dispatch])

  if (loading) {
    return null
  }

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner color="blue" loading size={[10, 25]} type="ScaleLoader" />}>
          <Switch>
            <Route path="/welcome" component={WelcomeScreen} />
            <TitleProvider>
              <Route 
                path="/" 
                render={() => {
                  if (!localStorage.getItem('medicare_welcomed')) {
                    return <Redirect to="/welcome" />
                  }
                  return <MediCare />
                }} 
              />
            </TitleProvider>
          </Switch>
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
