from html.parser import HTMLParser
from pathlib import Path
import unittest


class HomepageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_archive = False
        self.archive_depth = 0
        self.archive_dates = []
        self.recent_dates = []
        self.archive_summary_text = []
        self.in_summary = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "details" and attrs.get("id") == "archive-posts":
            self.in_archive = True
            self.archive_depth = 1
            return
        if self.in_archive and tag == "details":
            self.archive_depth += 1
        if self.in_archive and tag == "summary":
            self.in_summary = True
        if tag == "span" and "post-date" in attrs.get("class", "").split():
            self._reading_date = True
        else:
            self._reading_date = getattr(self, "_reading_date", False)

    def handle_endtag(self, tag):
        if tag == "span" and getattr(self, "_reading_date", False):
            self._reading_date = False
        if self.in_archive and tag == "summary":
            self.in_summary = False
        if self.in_archive and tag == "details":
            self.archive_depth -= 1
            if self.archive_depth == 0:
                self.in_archive = False

    def handle_data(self, data):
        text = data.strip()
        if self.in_summary and text:
            self.archive_summary_text.append(text)
        if getattr(self, "_reading_date", False) and text:
            if self.in_archive:
                self.archive_dates.append(text)
            else:
                self.recent_dates.append(text)


class HomepageArchiveTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        html = Path("dist/index.html").read_text(encoding="utf-8")
        cls.parser = HomepageParser()
        cls.parser.feed(html)
        cls.html = html

    def test_2020_and_older_posts_are_inside_collapsed_archive(self):
        self.assertIn('id="archive-posts"', self.html)
        self.assertNotIn(" open", self.html.split('id="archive-posts"', 1)[0][-80:])
        self.assertTrue(self.parser.archive_dates)
        years = {int(date[-4:]) for date in self.parser.archive_dates}
        self.assertTrue(all(year <= 2020 for year in years), years)

    def test_recent_posts_remain_outside_archive(self):
        self.assertTrue(self.parser.recent_dates)
        years = {int(date[-4:]) for date in self.parser.recent_dates}
        self.assertTrue(all(year > 2020 for year in years), years)

    def test_archive_control_is_named_show_more(self):
        self.assertEqual(" ".join(self.parser.archive_summary_text), "Show more")

    def test_category_filter_targets_recent_and_archived_posts(self):
        self.assertRegex(
            self.html,
            r'document\.querySelectorAll\(["\']\.post-entry["\']\)',
        )


if __name__ == "__main__":
    unittest.main()
