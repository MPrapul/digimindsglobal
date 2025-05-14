import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()

    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // Validate data based on type
    switch (type) {
      case 'contact':
        if (!data.name || !data.email || !data.message) {
          return NextResponse.json(
            { error: 'Missing required contact data' },
            { status: 400 }
          )
        }
        break
        
      case 'newsletter':
        if (!data.email) {
          return NextResponse.json(
            { error: 'Missing email address' },
            { status: 400 }
          )
        }
        break
        
      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        )
    }

    // Simulate a delay to make it feel like something happened
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Return success
    return NextResponse.json({ 
      success: true, 
      data: {
        id: `mock-${Date.now()}`
      }
    })
  } catch (error) {
    console.error('Email API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
} 