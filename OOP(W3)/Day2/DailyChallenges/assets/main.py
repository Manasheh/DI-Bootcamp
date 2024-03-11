#DailyChallenge

class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items else []
        self.page_size = int(pageSize)
        self.total_pages = (len(self.items) + self.page_size - 1) // self.page_size
        self.current_page = 1 if self.total_pages > 0 else 1

    def getVisibleItems(self):
        start_index = (self.current_page - 1) * self.page_size
        end_index = min(start_index + self.page_size, len(self.items))
        return self.items[start_index:end_index]

    def prevPage(self):
        self.current_page = max(1, self.current_page - 1)
        return self

    def nextPage(self):
        self.current_page = min(self.total_pages, self.current_page + 1)
        return self

    def firstPage(self):
        self.current_page = 1
        return self

    def lastPage(self):
        self.current_page = self.total_pages
        return self

    def goToPage(self, pageNum):
        page_num = int(pageNum)
        self.current_page = max(1, min(self.total_pages, page_num))
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print("Initial visible items:", p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print("After nextPage:", p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print("After lastPage:", p.getVisibleItems())  # ["y", "z"]
