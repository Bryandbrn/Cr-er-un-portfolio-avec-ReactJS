import React from 'react'

export default function GitHubModal({ gh }) {
  const { data, error } = gh || {}

  return (
    <div className="modal fade" id="githubModal" tabIndex="-1" aria-labelledby="githubModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="githubModalLabel">Profil GitHub</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">Impossible de charger les données GitHub : {error}</div>}
            {!error && !data && (
              <div className="d-flex align-items-center gap-2">
                <div className="spinner-border" role="status" aria-hidden="true"></div>
                <span>Chargement du profil…</span>
              </div>
            )}
            {data && (
              <div className="d-flex gap-3 align-items-center">
                <img src={data.avatar_url} alt="Avatar GitHub" width="80" height="80" className="rounded-circle" />
                <div>
                  <h6 className="mb-1">{data.name || data.login}</h6>
                  <p className="mb-1">{data.bio}</p>
                  <p className="mb-0"><i className="bi bi-people"></i> {data.followers} followers • {data.following} following</p>
                  <p className="mb-0"><i className="bi bi-book"></i> {data.public_repos} dépôts publics</p>
                  <a className="btn btn-primary mt-2" href={data.html_url} target="_blank" rel="noopener nofollow">Voir sur GitHub</a>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}
