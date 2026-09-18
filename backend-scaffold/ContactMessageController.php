<?php
namespace App\Http\Controllers;
use App\Models\ContactMessage;
use Illuminate\Http\Request;
class ContactMessageController extends Controller {
    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'message' => 'required|string|max:10000',
        ]);
        ContactMessage::create($data);
        return response()->json(['message' => 'Thank you. Your inquiry has been received.'], 201);
    }
    public function index() {
        return response()->json([
            'messages' => ContactMessage::latest('id')->paginate(20),
            'unread' => ContactMessage::where('is_read', false)->count(),
        ]);
    }
    public function update(Request $request, ContactMessage $message) {
        $message->update($request->validate(['is_read' => 'required|boolean']));
        return response()->json($message);
    }
    public function destroy(ContactMessage $message) {
        $message->delete();
        return response()->noContent();
    }
}
