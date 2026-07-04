const API_BASE = import.meta.env.VITE_API_URL || 'https://api.dovtalab.app/api/v1'

export interface DailyQuestion {
  id: number
  text: string
  type: 'single_choice' | 'multiple_choice' | 'matching' | 'input'
  payload: {
    options?: { id: number; text: string }[]
    left?: { id: number; text: string }[]
    right?: { id: number; text: string }[]
  }
  quiz_title: string
}

export interface DailyAnswerResult {
  correct: boolean
  correct_answer?: number | number[]
}

export interface LandingStats {
  users_count: number
  quizzes_count: number
  attempts_count: number
}

export interface PopularQuiz {
  id: number
  title: string
  description: string
  attempts_count: number
  questions_count: number
  cover_url?: string
}

export async function fetchDailyQuestion(): Promise<DailyQuestion | null> {
  try {
    const res = await fetch(`${API_BASE}/landing/daily-question`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function submitDailyAnswer(questionId: number, answer: unknown): Promise<DailyAnswerResult | null> {
  try {
    const res = await fetch(`${API_BASE}/landing/daily-question/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question_id: questionId, answer }),
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function fetchLandingStats(): Promise<LandingStats | null> {
  try {
    const res = await fetch(`${API_BASE}/landing/stats`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function fetchPopularQuiz(): Promise<PopularQuiz | null> {
  try {
    const res = await fetch(`${API_BASE}/landing/popular-quiz`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
